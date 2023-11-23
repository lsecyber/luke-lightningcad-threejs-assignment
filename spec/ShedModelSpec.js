/*
 * Filename: spec/ShedModelSpec.js
 * Description: This file contains tests for the ShedModel class.
 * Author: Luke Ertzberger
 * Date: 11/23/2023
 * Version: 1.0
 */

import * as THREE from 'three';
import ShedModel from '../models/ShedModel.js';

describe('ShedModel', () => {
  let model;

  beforeEach(() => {
    model = new ShedModel();
  });

  describe('shedWall1', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedWall1', () => {
      const result = model.shedWall1(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#7c7c7c');
      expect(result[2]).toEqual([0, 5, -15]);
      expect(result[3]).toBeCloseTo(Math.PI / 2, 6);
      expect(result[4]).toBe(0);
    });
  });

  describe('shedWall2LeftPart', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedWall2LeftPart', () => {
      const result = model.shedWall2LeftPart(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#7c7c7c');
      expect(result[2]).toEqual([10, 10 / 3, -15]);
      expect(result[3]).toBe(0);
      expect(result[4]).toBeCloseTo(Math.PI / 2, 6);
    });
  });

  describe('shedWall2RightPart', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedWall2RightPart', () => {
      const result = model.shedWall2RightPart(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#7c7c7c');
      expect(result[2]).toEqual([10, -(10 / 3), -15]);
      expect(result[3]).toBe(0);
      expect(result[4]).toBeCloseTo(Math.PI / 2, 6);
    });
  });

  describe('shedWall2TopPart', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedWall2TopPart', () => {
      const result = model.shedWall2TopPart(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#7c7c7c');
      expect(result[2]).toEqual([10, 0, -27]);
      expect(result[3]).toBe(0);
      expect(result[4]).toBeCloseTo(Math.PI / 2, 6);
    });
  });

  describe('shedWall2Door', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedWall2Door', () => {
      const result = model.shedWall2Door(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#000000');
      expect(result[2]).toEqual([10, 0, -12]);
      expect(result[3]).toBe(0);
      expect(result[4]).toBeCloseTo(Math.PI / 2, 6);
    });
  });

  describe('shedWall3', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedWall3', () => {
      const result = model.shedWall3(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#7c7c7c');
      expect(result[2]).toEqual([0, -5, -15]);
      expect(result[3]).toBeCloseTo(Math.PI / 2, 6);
      expect(result[4]).toBe(0);
    });
  });

  describe('shedWall4', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedWall4', () => {
      const result = model.shedWall4(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#7c7c7c');
      expect(result[2]).toEqual([-10, 0, -15]);
      expect(result[3]).toBe(0);
      expect(result[4]).toBeCloseTo(Math.PI / 2, 6);
    });
  });

  describe('shedRoofPt1', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedRoofPt1', () => {
      const result = model.shedRoofPt1(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#000000');
      expect(result[2]).toEqual([0, 10/4, -30-(10/4)]);
      expect(result[3]).toBeCloseTo(Math.PI / 4, 6);
      expect(result[4]).toBe(0);
    });
  });

  describe('shedRoofPt2', () => {
    it('should return an array with plane geometry, color, position, and rotation for shedRoofPt2', () => {
      const result = model.shedRoofPt2(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(5);
      expect(result[0]).toBeInstanceOf(THREE.PlaneGeometry);
      expect(result[1]).toBe('#000000');
      expect(result[2]).toEqual([0, -10/4, -30-(10/4)]);
      expect(result[3]).toBeCloseTo(-Math.PI / 4, 6);
      expect(result[4]).toBe(0);
    });
  });

  describe('gable1', () => {
    it('should return an array with triangle geometry and color for gable1', () => {
      const result = model.gable1(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(2);
      expect(result[0]).toBeInstanceOf(THREE.BufferGeometry);
      expect(result[1]).toBe('#000000');
    });
  });

  describe('gable2', () => {
    it('should return an array with triangle geometry and color for gable2', () => {
      const result = model.gable2(10, 20, 30);

      expect(result).toBeDefined();
      expect(result.length).toBe(2);
      expect(result[0]).toBeInstanceOf(THREE.BufferGeometry);
      expect(result[1]).toBe('#000000');
    });
  });


  describe('callTriangle', () => {
    it('should return a BufferGeometry representing a triangle', () => {
      const vertices = new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]);
      const result = ShedModel['callTriangle'](vertices);

      expect(result).toBeDefined();
      expect(result).toBeInstanceOf(THREE.BufferGeometry);
    });
  });
});
