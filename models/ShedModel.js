/*
 * Filename: models/ShedModel.js
 * Description: This file contains the custom ShedModel class export, which provides parts for a 3D shed.
 * Author: Luke Ertzberger
 * Date: 11/23/2023
 * Version: 1.0
 */

import RoofModel from "./RoofModel.js";
import WallModel from "./WallModel.js";

/**
 * Class representing the parts of a 3D shed model.
 */
export default class ShedModel {
  /**
   * Creates an instance of ShedModel.
   * @param {number} width - The width of the shed.
   * @param {number} length - The length of the shed.
   * @param {number} height - The height of the shed.
   * @param {boolean} roofIsGable - Indicates whether the roof is gabled.
   * @param {number} wallWithDoor - The wall number (1 to 4) with the door.
   */
  constructor(width, length, height, roofIsGable = false, wallWithDoor = 2) {
    this.roof = new RoofModel(width, length, height, roofIsGable);

    const doorIsWall1 = wallWithDoor === 1;
    const doorIsWall2 = wallWithDoor === 2;
    const doorIsWall3 = wallWithDoor === 3;
    const doorIsWall4 = wallWithDoor === 4;

    // Create instances of WallModel for each wall of the shed
    this.wallOne = new WallModel(1, length, height, [0, width / 2, -(height / 2)], doorIsWall1);
    this.wallTwo = new WallModel(2, width, height, [length / 2, 0, -(height / 2)], doorIsWall2);
    this.wallThree = new WallModel(3, length, height, [0, -(width / 2), -(height / 2)], doorIsWall3);
    this.wallFour = new WallModel(4, width, height, [-(length / 2), 0, -(height / 2)], doorIsWall4);
  }

  /**
   * Renders the 3D shed model by rendering its roof and walls.
   */
  render() {
    this.roof.render();
    this.wallOne.render();
    this.wallTwo.render();
    this.wallThree.render();
    this.wallFour.render();
  }
}
