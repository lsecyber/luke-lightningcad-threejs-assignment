/*
 * Filename: index.js
 * Description: This file contains the main script for rendering a 3D shed model using Three.js and a custom ShedModel class.
 * Author: Luke Ertzberger
 * Date: 11/23/2023
 * Version: 1.0
 */

import * as THREE from 'three';
import ShedModel from './models/ShedModel.js';

/**
 * The width of the shed model.
 * @type {number}
 */
let width = 10;

/**
 * The length of the shed model.
 * @type {number}
 */
let length = 10;

/**
 * The height of the shed model.
 * @type {number}
 */
let height = 10;


/**
 * Renders the 3D model of the shed using the specified dimensions.
 */
const renderModel = () => {
  application.clear();

  const shedModel = new ShedModel();

  // Adding a 3D image of grass as a background
  application.add3DImage(new THREE.PlaneGeometry(40, 40, 80), '/img/grass.webp');

  // Adding different parts of the shed model
  application.add3DShape(...shedModel.shedWall1(width, length, height));
  application.add3DShape(...shedModel.shedWall2LeftPart(width, length, height));
  application.add3DShape(...shedModel.shedWall2RightPart(width, length, height));
  application.add3DShape(...shedModel.shedWall2TopPart(width, length, height));
  application.add3DShape(...shedModel.shedWall2Door(width, length, height));
  application.add3DShape(...shedModel.shedWall3(width, length, height));
  application.add3DShape(...shedModel.shedWall4(width, length, height));
  application.add3DShape(...shedModel.shedRoofPt1(width, length, height));
  application.add3DShape(...shedModel.shedRoofPt2(width, length, height));
  application.add3DShape(...shedModel.gable1(width, length, height));
  application.add3DShape(...shedModel.gable2(width, length, height));
};


// Initial rendering of the model
renderModel();


/**
 * Updates the width of the shed and re-renders the model.
 * @param {number} newValue - The new width value.
 */
application.widthChanged = (newValue) => {
  width = newValue;
  renderModel();
};

/**
 * Updates the length of the shed and re-renders the model.
 * @param {number} newValue - The new length value.
 */
application.lengthChanged = (newValue) => {
  length = newValue;
  renderModel();
};

/**
 * Updates the height of the shed and re-renders the model.
 * @param {number} newValue - The new height value.
 */
application.heightChanged = (newValue) => {
  height = newValue;
  renderModel();
};
