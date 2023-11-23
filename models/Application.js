import * as THREE from 'three'
import { OrbitControls } from 'OrbitControls'

export default class Application {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  scene() {
    return this._scene ??= this._defaultScene()
  }

  _defaultScene() {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color("#DDDDDD")
    return scene
  }

  camera() {
    return this._camera ??= this._defaultCamera()
  }

  _defaultCamera() {
    const camera = new THREE.PerspectiveCamera(75, this.width / this.height, 0.1, 1000)
    camera.up.set(0, 0, -1)
    camera.position.setZ(-20) // move the camera away from the origin
    // apply rotation to make the x and y axes line up with the canvas directions
    camera.rotateZ(Math.PI)
    camera.rotateY(Math.PI)
    return camera
  }

  renderer() {
    return this._renderer ??= this._defaultRenderer()
  }

  _defaultRenderer() {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(this.width, this.height)
    return renderer
  }

  enableLighting() {
    if (this._lightingEnabled) return

    this._lightingEnabled = true
    this.scene().add(this.directionalLight())
    this.scene().add(this.ambientLight())
  }

  directionalLight() {
    return this._directionalLight ??= this._defaultDirectionalLight()
  }

  _defaultDirectionalLight() {
    const light = new THREE.DirectionalLight(0xffffff, 0.5)
    light.position.set(1, 3, -5)
    return light
  }

  ambientLight() {
    return this._ambientLight = this._defaultAmbientLight()
  }

  _defaultAmbientLight() {
    return new THREE.AmbientLight(0xffffff, 0.3)
  }

  enableOrbitControls() {
    if (this._orbitControlsActive) return

    this._orbitControlsActive = true
    this.camera().position.set(12, 16, -16)
    this.controls().enableRotate = true
  }

  controls() {
    return this._controls ??= this._defaultControls()
  }

  _defaultControls() {
    const controls = new OrbitControls(this.camera(), this.renderer().domElement)
    controls.enableDamping = true
    controls.enableRotate = false
    controls.update()
    return controls
  }

  addShape(shape, color) {
    const geometry = new THREE.ShapeGeometry(shape, 50)

    const material = new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.DoubleSide,
      depthWrite: false
    })

    const shapeMesh = new THREE.Mesh(geometry, material)
    this.scene().add(shapeMesh)
  }

  add3DShape(geometry, color) {
    this.enableLighting()
    this.enableOrbitControls()

    const material = new THREE.MeshStandardMaterial({
      color: color
    })

    const shapeMesh = new THREE.Mesh(geometry, material)
    this.scene().add(shapeMesh)
  }

  clear(node = this.scene()) {
    if (node.children && node.children.length > 0) {
      node.children.slice().forEach(child => {
        this.clear(child)

        if (child.geometry) child.geometry.dispose()
        if (child.material) {
          const materials = Array.isArray(child.material) ? child.material : [child.material]
          materials.forEach(material => material.dispose())
        }

        node.remove(child)
      })
    }
    this._orbitControlsActive = undefined
    this._lightingEnabled = undefined
  }

  render(_timestamp) {
    this.controls().update()
    this.renderer().render(this.scene(), this.camera())
  }

  setWidthChangedCallback(callback) {
    this._widthChangedCallback = callback
  }

  widthChanged(newValue) {
    this._widthChangedCallback && this._widthChangedCallback(newValue)
  }

  setLengthChangedCallback(callback) {
    this._lengthChangedCallback = callback
  }

  lengthChanged(newValue) {
    this._lengthChangedCallback && this._lengthChangedCallback(newValue)
  }

  setHeightChangedCallback(callback) {
    this._heightChangedCallback = callback
  }

  heightChanged(newValue) {
    this._heightChangedCallback && this._heightChangedCallback(newValue)
  }
}
