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
 * Whether the shed has a gable roof.
 * @type {boolean}
 */
let roofIsGable = false;

/**
 * The wall currently containing the door.
 * @type {number}
 */
let wallWithDoor = 2;


/**
 * Renders the 3D model of the shed using the specified dimensions.
 */
const renderModel = () => {
  application.clear();

  const shedModel = new ShedModel(width, length, height, roofIsGable, wallWithDoor);
  shedModel.render();

  // Adding a 3D image of grass as a background
  application.add3DImage(new THREE.PlaneGeometry(40, 40, 80), '/img/grass.webp');

};


// Initial rendering of the model
renderModel();


/**
 * Updates the width of the shed and re-renders the model.
 * @param {number} newValue - The new width value.
 */
application.setWidthChangedCallback((newValue) => {
  width = newValue;
  renderModel();
});

/**
 * Updates the length of the shed and re-renders the model.
 * @param {number} newValue - The new length value.
 */
application.setLengthChangedCallback((newValue) => {
  length = newValue;
  renderModel();
});

/**
 * Updates the height of the shed and re-renders the model.
 * @param {number} newValue - The new height value.
 */
application.setHeightChangedCallback((newValue) => {
  height = newValue;
  renderModel();
});

/**
 * Updates the height of the shed and re-renders the model.
 * @param {boolean} newValue - The new height value.
 */
application.setGableRoofChangedCallback((newValue) => {
  roofIsGable = newValue;
  renderModel();
});

/**
 * Updates the wall with the door and re-renders the model.
 * @param {number} newValue - The new wall with the door value.
 */
application.setWallWithDoorChangedCallback((newValue) => {
  wallWithDoor = newValue;
  renderModel();
});
