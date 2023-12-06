/*
 * Filename: models/RoofModel.js
 * Description: This file contains the RoofModel class export that is used in the ShedModel
 *              to generate the roof of the shed.
 * Author: Luke Ertzberger
 * Date: 12/5/2023
 * Version: 1.0
 */

import * as THREE from 'three';

/**
 * Class representing a RoofModel for generating the roof of a shed.
 */
export default class RoofModel {
  /**
   * Creates an instance of RoofModel.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @param {boolean} isGable - Indicates whether the roof is gabled.
   */
  constructor(width, length, height, isGable = false) {
    this.isGable = isGable;
    this.shedWidth = width;
    this.shedLength = length;
    this.shedHeight = height;
  }

  /**
   * Renders the roof based on the type (gable or flat).
   */
  render() {
    if (this.isGable) {
      this.renderGable();
    } else {
      this.renderFlat();
    }
  }

  /**
   * Renders the gable roof of the shed.
   * @returns {void}
   */
  renderGable() {
    this.addShedGableRoofSide1();
    this.addShedGableRoofSide2();
    this.addGable1();
    this.addGable2();
  }

  /**
   * Renders the flat roof of the shed.
   * @returns {void}
   */
  renderFlat() {
    this.addFlatRoof();
  }

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

    return triangleGeometry;
  };

  /**
   * Calls the private #triangle method (mainly for unit testing).
   * @param {Float32Array} vertices - The vertices of the triangle.
   * @returns {THREE.BufferGeometry} The generated triangle geometry.
   */
  static callTriangle(vertices) {
    return RoofModel.#triangle(vertices);
  }

  /**
   * Adds a flat roof to the application.
   * @param {number} width - The width of the roof.
   * @param {number} length - The length of the roof.
   * @param {number} height - The height of the roof (above the ground).
   * @returns {Object} - The 3D shape representing the roof.
   */
  addFlatRoof(width = this.shedWidth, length = this.shedLength, height = this.shedHeight) {
    const geometry = new THREE.PlaneGeometry(length, width);
    return application.add3DShape(geometry, '#000000', [0, 0, -(height)], 0, 0);
  }

  /**
   * Adds the first part of the roof to the application.
   * @param {number} [width=this.shedWidth] - The width of the shed.
   * @param {number} [length=this.shedLength] - The length of the shed.
   * @param {number} [height=this.shedHeight] - The height of the shed.
   * @returns {Object} - The 3D shape representing the roof side 1.
   */
  addShedGableRoofSide1(width = this.shedWidth, length = this.shedLength, height = this.shedHeight) {
    const roofLength = (width * Math.SQRT2) / 2;
    const geometry = new THREE.PlaneGeometry(length, roofLength);
    return application.add3DShape(
      geometry,
      '#000000',
      [
        0,
        (width / 2) - (roofLength / (2 * Math.SQRT2)),
        -(height) - (roofLength / (2 * Math.SQRT2)),
      ],
      Math.PI / 4,
      0
    );
  }

  /**
   * Adds the second part of the roof to the application.
   * @param {number} [width=this.shedWidth] - The width of the shed.
   * @param {number} [length=this.shedLength] - The length of the shed.
   * @param {number} [height=this.shedHeight] - The height of the shed.
   * @returns {Object} - The 3D shape representing the roof side 2.
   */
  addShedGableRoofSide2(width = this.shedWidth, length = this.shedLength, height = this.shedHeight) {
    const roofLength = (width * Math.SQRT2) / 2;
    const geometry = new THREE.PlaneGeometry(length, roofLength);
    return application.add3DShape(
      geometry,
      '#000000',
      [
        0,
        -(width / 2) + (roofLength / (2 * Math.SQRT2)),
        -(height) - (roofLength / (2 * Math.SQRT2)),
      ],
      -Math.PI / 4,
      0
    );
  }

  /**
   * Adds the first (front) gable of the shed to the application.
   * @param {number} [width=this.shedWidth] - The width of the shed.
   * @param {number} [length=this.shedLength] - The length of the shed.
   * @param {number} [height=this.shedHeight] - The height of the shed.
   * @returns {Object} - The 3D shape representing gable 1.
   */
  addGable1(width = this.shedWidth, length = this.shedLength, height = this.shedHeight) {
    const vertices = new Float32Array([
      //x,  y,   z
      (length / 2), (width / 2), -(height), // Vertex 1
      (length / 2), -(width / 2), -(height), // Vertex 2
      (length / 2), 0.0, -(height + (width / 2)), // Vertex 3
    ]);
    const geometry = RoofModel.#triangle(vertices);
    return application.add3DShape(geometry, '#000000');
  }

  /**
   * Adds the second (back) gable of the shed to the application.
   * @param {number} [width=this.shedWidth] - The width of the shed.
   * @param {number} [length=this.shedLength] - The length of the shed.
   * @param {number} [height=this.shedHeight] - The height of the shed.
   * @returns {Object} - The 3D shape representing gable 2.
   */
  addGable2(width = this.shedWidth, length = this.shedLength, height = this.shedHeight) {
    const vertices = new Float32Array([
      //x,  y,   z
      -(length / 2), (width / 2), -(height), // Vertex 1
      -(length / 2), -(width / 2), -(height), // Vertex 2
      -(length / 2), 0.0, -(height + (width / 2)), // Vertex 3
    ]);
    const geometry = RoofModel.#triangle(vertices);
    return application.add3DShape(geometry, '#000000');
  }
}
