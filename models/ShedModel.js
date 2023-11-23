/*
 * Filename: models/ShedModel.js
 * Description: This file contains the custom ShedModel class export, which provides parts for a 3D shed.
 * Author: Luke Ertzberger
 * Date: 11/23/2023
 * Version: 1.0
 */

import * as THREE from 'three'


/**
 * Class representing the parts of a 3D shed model.
 */
export default class ShedModel {
  /**
   * Generates a triangle geometry based on the provided vertices.
   * @param {Float32Array} vertices - The vertices of the triangle.
   * @returns {THREE.BufferGeometry} The generated triangle geometry.
   * @private
   */
  static #triangle = (vertices) => {
    const triangleGeometry = new THREE.BufferGeometry();

    const vertexAttribute = new THREE.BufferAttribute(vertices, 3);
    triangleGeometry.setAttribute('position', vertexAttribute);
    const faces = new Uint32Array([
      0, 1, 2, // Face 1
    ]);
    const faceAttribute = new THREE.BufferAttribute(faces, 3);
    triangleGeometry.setAttribute('index', faceAttribute);

    return triangleGeometry
  }

  /**
   * Calls the private #triangle method (mainly for unit testing).
   * @param {Float32Array} vertices - The vertices of the triangle.
   * @returns {THREE.BufferGeometry} The generated triangle geometry.
   */
  static callTriangle(vertices) {
    return ShedModel.#triangle(vertices)
  }

  /**
   * Generates geometry and properties for the first wall of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedWall1(width, length, height) {
    const geometry = new THREE.PlaneGeometry(length, height)
    return this.__shedWall1 ??= [geometry, '#7c7c7c', [0, width/2, -(height / 2)], Math.PI / 2, 0]
  }

  /**
   * Generates geometry and properties for the left part of the second wall of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedWall2LeftPart(width, length, height) {
    const geometry = new THREE.PlaneGeometry(height, width / 3)
    return this.__shedWall2LeftPart ??= [geometry, '#7c7c7c', [length/2, width/3, -(height / 2)], 0, Math.PI / 2]
  }

  /**
   * Generates geometry and properties for the right part of the second wall of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedWall2RightPart(width, length, height) {
    const geometry = new THREE.PlaneGeometry(height, width / 3)
    return this.__shedWall2RightPart ??= [geometry, '#7c7c7c', [length/2, -(width/3), -(height / 2)], 0, Math.PI / 2]
  }

  /**
   * Generates geometry and properties for the top part of the second wall of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedWall2TopPart(width, length, height) {
    const geometry = new THREE.PlaneGeometry(height * 0.2, width)
    return this.__shedWall2TopPart ??= [geometry, '#7c7c7c', [length/2, 0, -(height * 0.9)], 0, Math.PI / 2]
  }

  /**
   * Generates geometry and properties for the door in the second wall of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedWall2Door(width, length, height) {
    const geometry = new THREE.PlaneGeometry(height * 0.8, width/3)
    return this.__shedWall2Door ??= [geometry, '#000000', [length/2, 0, -(height * 0.4)], 0, Math.PI / 2]

  }

  /**
   * Generates geometry and properties for the third wall of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedWall3(width, length, height) {
    const geometry = new THREE.PlaneGeometry(length, height)
    return this.__shedWall3 ??= [geometry, '#7c7c7c', [0, -(width/2), -(height / 2)], Math.PI / 2, 0]
  }

  /**
   * Generates geometry and properties for the left part of the fourth wall of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedWall4(width, length, height) {
    const geometry = new THREE.PlaneGeometry(height, width)
    return this.__shedWall4 ??= [geometry, '#7c7c7c', [-(length/2), 0, -(height / 2)], 0, Math.PI / 2]
  }

  /**
   * Generates geometry and properties for the first half of the shed's roof.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedRoofPt1(width, length, height) {
    const roofLength = (width * Math.SQRT2) / 2
    const geometry = new THREE.PlaneGeometry(length, roofLength)
    return this.__shedRoofPt1 ??= [
      geometry,
      '#000000',
      [
        0,
        (width/2) - (roofLength / (2 * Math.SQRT2)),
        -(height) - (roofLength / (2 * Math.SQRT2))
      ],
      Math.PI / 4,
      0
    ]
  }

  /**
   * Generates geometry and properties for the second half of the shed's roof.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry, color, position, rotation on X, and rotation on Y.
   */
  shedRoofPt2(width, length, height) {
    const roofLength = (width * Math.SQRT2) / 2
    const geometry = new THREE.PlaneGeometry(length, roofLength)
    return this.__shedRoofPt2 ??= [
      geometry,
      '#000000',
      [
        0,
        -(width/2) + (roofLength / (2 * Math.SQRT2))
        ,-(height) - (roofLength / (2 * Math.SQRT2))
      ],
      -Math.PI / 4,
      0
    ]
  }

  /**
   * Generates geometry and properties for the first (front) gable of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry and color.
   */
  gable1(width, length, height) {
    const vertices = new Float32Array([
      //x,  y,   z
      (length / 2), (width / 2), -(height), // Vertex 1
      (length / 2), -(width / 2), -(height), // Vertex 2
      (length / 2), 0.0, -(height + (width / 2)), // Vertex 3
    ]);
    const geometry = ShedModel.#triangle(vertices)
    return this.__gable1 ??= [geometry, '#000000']
  }

  /**
   * Generates geometry and properties for the second (back) gable of the shed.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @returns {Array} An array containing geometry and color.
   */
  gable2(width, length, height) {
    const vertices = new Float32Array([
      //x,  y,   z
      -(length / 2), (width / 2), -(height), // Vertex 1
      -(length / 2), -(width / 2), -(height), // Vertex 2
      -(length / 2), 0.0, -(height + (width / 2)), // Vertex 3
    ]);
    const geometry = ShedModel.#triangle(vertices)
    return this.__gable2 ??= [geometry, '#000000']
  }
}
