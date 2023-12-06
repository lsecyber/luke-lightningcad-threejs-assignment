// Import the RoofModel class
import RoofModel from '../models/RoofModel.js';
import * as THREE from 'three';

describe('RoofModel', () => {
  let roofModel;

  beforeEach(() => {
    // Create a new instance of RoofModel before each test
    roofModel = new RoofModel(10, 20, 5);
  });

  it('should be defined', () => {
    // Check if RoofModel is defined
    expect(roofModel).toBeDefined();
  });

  describe('render', () => {
    it('should call renderGable when isGable is true', () => {
      spyOn(roofModel, 'renderGable');
      roofModel.isGable = true
      roofModel.render();
      expect(roofModel.renderGable).toHaveBeenCalled();
    });

    it('should call renderFlat when isGable is false', () => {
      spyOn(roofModel, 'renderFlat');
      roofModel.isGable = false;
      roofModel.render();
      expect(roofModel.renderFlat).toHaveBeenCalled();
    });
  });

  describe('renderGable', () => {
    it('should call specific methods for rendering gable roof', () => {
      spyOn(roofModel, 'addShedGableRoofSide1');
      spyOn(roofModel, 'addShedGableRoofSide2');
      spyOn(roofModel, 'addGable1');
      spyOn(roofModel, 'addGable2');

      roofModel.renderGable();

      expect(roofModel.addShedGableRoofSide1).toHaveBeenCalled();
      expect(roofModel.addShedGableRoofSide2).toHaveBeenCalled();
      expect(roofModel.addGable1).toHaveBeenCalled();
      expect(roofModel.addGable2).toHaveBeenCalled();
    });
  });

  describe('renderFlat', () => {
    it('should call specific method for rendering flat roof', () => {
      spyOn(roofModel, 'addFlatRoof');

      roofModel.renderFlat();

      expect(roofModel.addFlatRoof).toHaveBeenCalled();
    });
  });

  describe('addFlatRoof', () => {
    it('should call application.add3DShape with correct parameters', () => {
      const add3DShapeSpy = spyOn(application, 'add3DShape');
      roofModel.addFlatRoof(10, 20, 5);

      // Assuming addFlatRoof updates the geometry, color, position, rotation, and scale correctly
      expect(add3DShapeSpy).toHaveBeenCalledWith(
        jasmine.any(THREE.PlaneGeometry),
        '#000000',
        jasmine.arrayContaining([0, 0, -5]),
        0,
        0
      );
    });
  });

  describe('addGable1', () => {
    it('should call application.add3DShape with correct parameters', () => {
      const add3DShapeSpy = spyOn(application, 'add3DShape');
      roofModel.addGable1(10, 20, 5);

      expect(add3DShapeSpy).toHaveBeenCalledWith(
        jasmine.any(THREE.BufferGeometry),
        '#000000',
      );
    });
  });

  describe('addGable2', () => {
    it('should call application.add3DShape with correct parameters', () => {
      const add3DShapeSpy = spyOn(application, 'add3DShape');
      roofModel.addGable2(10, 20, 5);

      expect(add3DShapeSpy).toHaveBeenCalledWith(
        jasmine.any(THREE.BufferGeometry),
        '#000000',
      );
    });
  });

  describe('addShedGableRoofSide1', () => {
    it('should call application.add3DShape with correct parameters', () => {
      const add3DShapeSpy = spyOn(application, 'add3DShape');
      roofModel.addShedGableRoofSide1(10, 20, 5);

      expect(add3DShapeSpy).toHaveBeenCalledWith(
        jasmine.any(THREE.BufferGeometry),
        '#000000',
        jasmine.arrayContaining([0, 2.5, -7.5]),
        Math.PI / 4,
        0
      );
    });
  });

  describe('addShedGableRoofSide2', () => {
    it('should call application.add3DShape with correct parameters', () => {
      const add3DShapeSpy = spyOn(application, 'add3DShape');
      roofModel.addShedGableRoofSide2(10, 20, 5);

      expect(add3DShapeSpy).toHaveBeenCalledWith(
        jasmine.any(THREE.BufferGeometry),
        '#000000',
        jasmine.arrayContaining([0, -2.5, -7.5]),
        -Math.PI / 4,
        0
      );
    });
  });


  describe('callTriangle', () => {
    it('should call the private #triangle method with correct parameters', () => {
      const vertices = new Float32Array([1, 2, 3]);
      const result = RoofModel.callTriangle(vertices);

      expect(result).toBeDefined();
    });
  });
});
