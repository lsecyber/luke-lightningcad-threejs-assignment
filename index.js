import * as THREE from 'three'
import ExampleModel from './models/ExampleModel.js'

// 2D Example:
const model = new ExampleModel()
application.addShape(model.shape(), '#FF7800')

// 3D Example:
// const shape = new THREE.BoxGeometry(5, 5, 5)
// application.add3DShape(shape, '#FF7800')
