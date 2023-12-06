import WallModel from '../models/WallModel.js'; // Update the path accordingly
import * as THREE from 'three';

describe('WallModel', () => {
  describe('Construction with Door', () => {
    it('should create a wall with a door', () => {
      const wallNumber = 1;
      const x = 10;
      const y = 20;
      const position = [0, 0, 0];
      const hasDoor = true;
      const color = '#7c7c7c';

      const wall = new WallModel(wallNumber, x, y, position, hasDoor, color);

      expect(wall.wallNumberIsEven).toBe(false);
      expect(wall.x).toBe(x);
      expect(wall.y).toBe(y);
      expect(wall.position).toEqual(position);
      expect(wall.hasDoor).toBe(hasDoor);
      expect(wall.color).toBe(color);
    });

    it('should render a wall with a door', () => {
      const wallNumber = 1;
      const x = 10;
      const y = 20;
      const position = [0, 0, 0];
      const hasDoor = true;
      const color = '#7c7c7c';

      const wall = new WallModel(wallNumber, x, y, position, hasDoor, color);


      const addWallSpy = spyOn(wall, 'addWall');
      wall.render();

      expect(addWallSpy).toHaveBeenCalled();
    });
  });

  describe('Construction without Door', () => {
    it('should create a wall without a door', () => {
      const wallNumber = 2;
      const x = 15;
      const y = 25;
      const position = [0, 0, 0];
      const hasDoor = false;
      const color = '#7c7c7c';

      const wall = new WallModel(wallNumber, x, y, position, hasDoor, color);

      expect(wall.wallNumberIsEven).toBe(true);
      expect(wall.x).toBe(x);
      expect(wall.y).toBe(y);
      expect(wall.position).toEqual(position);
      expect(wall.hasDoor).toBe(hasDoor);
      expect(wall.color).toBe(color);
    });

    it('should render a wall without a door', () => {
      const wallNumber = 2;
      const x = 15;
      const y = 25;
      const position = [0, 0, 0];
      const hasDoor = false;
      const color = '#7c7c7c';

      const wall = new WallModel(wallNumber, x, y, position, hasDoor, color);

      const addWallSpy = spyOn(wall, 'addWall');
      wall.render();

      const geometry = new THREE.PlaneGeometry(x, y);
      expect(addWallSpy).toHaveBeenCalledWith();
    });
  });
});
