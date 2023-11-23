import * as THREE from 'three'

export default class ExampleModel {
  shape() {
    return this._shape ??= new THREE.Shape(this.vertices())
  }

  vertices() {
    return this._vertices ??= [
      new THREE.Vector2(0, -5),
      new THREE.Vector2(5, 0),
      new THREE.Vector2(4, 0),
      new THREE.Vector2(4, 5),
      new THREE.Vector2(-4, 5),
      new THREE.Vector2(-4, 0),
      new THREE.Vector2(-5, 0),
    ]
  }
}
