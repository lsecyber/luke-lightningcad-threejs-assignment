/*
 * Filename: models/WallModel.js
 * Description: This file contains the WallModel class export that is used in the ShedModel
 *              to generate a wall of the shed.
 * Author: Luke Ertzberger
 * Date: 12/5/2023
 * Version: 1.0
 */

import * as THREE from 'three';

/**
 * Class representing a WallModel for generating walls of a shed.
 */
export default class WallModel {
  /**
   * Creates an instance of WallModel.
   * @param {number} wallNumber - The number identifying the wall.
   * @param {number} x - The width of the wall.
   * @param {number} y - The height of the wall.
   * @param {Array<number>} position - The position of the wall.
   * @param {boolean} hasDoor - Indicates if the wall has a door.
   * @param {string} color - The color of the wall.
   */
  constructor(wallNumber, x, y, position = [0, 0, 0], hasDoor = false, color = '#7c7c7c') {
    switch (wallNumber) {
      case 1:
        this.rotationX = Math.PI / 2;
        this.rotationY = 0;
        this.rotationZ = 0;
        break;

      case 2:
        this.rotationX = 0;
        this.rotationY = Math.PI / 2;
        this.rotationZ = Math.PI / 2;
        break;

      case 3:
        this.rotationX = Math.PI / 2;
        this.rotationY = 0;
        this.rotationZ = 0;
        break;

      case 4:
        this.rotationX = 0;
        this.rotationY = Math.PI / 2;
        this.rotationZ = Math.PI / 2;
        break;
    }
    this.wallNumberIsEven = wallNumber % 2 === 0;
    this.x = x;
    this.y = y;
    this.position = position;
    this.hasDoor = hasDoor;
    this.color = color;
  }

  /**
   * Renders the wall using the specified parameters.
   */
  render() {
    this.addWall();
  }

  /**
   * Adds a wall to the scene based on the provided parameters.
   * @param {number} [x=this.x] - The width of the wall.
   * @param {number} [y=this.y] - The height of the wall.
   * @param {Array<number>} [position=this.position] - The position of the wall.
   * @param {boolean} [door=this.hasDoor] - Indicates if the wall has a door.
   * @param {string} [color=this.color] - The color of the wall.
   * @param {number} [rotationX=this.rotationX] - The rotation around the X-axis.
   * @param {number} [rotationY=this.rotationY] - The rotation around the Y-axis.
   * @param {number} [rotationZ=this.rotationZ] - The rotation around the Z-axis.
   */
  addWall(
    x = this.x,
    y = this.y,
    position = this.position,
    door = this.hasDoor,
    color = this.color,
    rotationX = this.rotationX,
    rotationY = this.rotationY,
    rotationZ = this.rotationZ
  ) {
    if (door) {
      const doorRotationZ = this.wallNumberIsEven ? 0 : Math.PI / 2;

      // Door
      const doorPosition = JSON.parse(JSON.stringify(this.position));
      doorPosition[2] = doorPosition[2] * 0.8;
      this.addWall(y * 0.8, x / 3, doorPosition, false, '#000000', rotationX, rotationY, doorRotationZ);

      // Left Of Door
      const leftOfDoorPosition = JSON.parse(JSON.stringify(this.position));
      if (this.wallNumberIsEven) {
        leftOfDoorPosition[1] = x / 3;
      } else {
        leftOfDoorPosition[0] = x / 3;
      }
      this.addWall(y, x / 3, leftOfDoorPosition, false, color, rotationX, rotationY, doorRotationZ);

      // Right Of Door
      const rightOfDoorPosition = JSON.parse(JSON.stringify(this.position));
      if (this.wallNumberIsEven) {
        rightOfDoorPosition[1] = -x / 3;
      } else {
        rightOfDoorPosition[0] = -x / 3;
      }
      this.addWall(y, x / 3, rightOfDoorPosition, false, color, rotationX, rotationY, doorRotationZ);

      // Above Door
      const aboveDoorPosition = JSON.parse(JSON.stringify(this.position));
      aboveDoorPosition[2] = -y * 0.9;
      this.addWall(y * 0.2, x / 3, aboveDoorPosition, false, color, rotationX, rotationY, doorRotationZ);
    } else {
      const geometry = new THREE.PlaneGeometry(x, y);
      application.add3DShape(geometry, color, position, rotationX, rotationY, rotationZ);
    }
  }
}
