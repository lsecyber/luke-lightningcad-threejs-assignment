// ShedModel.spec.js
import ShedModel from '../models/ShedModel.js';

describe('ShedModel', () => {
  let shedModel;

  beforeEach(() => {
    // Create a new instance of ShedModel before each test
    shedModel = new ShedModel(10, 20, 5, true, 3);
  });

  it('should create an instance of ShedModel', () => {
    expect(shedModel).toBeDefined();
    expect(shedModel instanceof ShedModel).toBe(true);
  });

  it('should initialize properties correctly', () => {
    expect(shedModel.roof).toBeDefined();
    expect(shedModel.wallOne).toBeDefined();
    expect(shedModel.wallTwo).toBeDefined();
    expect(shedModel.wallThree).toBeDefined();
    expect(shedModel.wallFour).toBeDefined();

  });

  it('should render the 3D shed model', () => {
    spyOn(shedModel.roof, 'render');
    spyOn(shedModel.wallOne, 'render');
    spyOn(shedModel.wallTwo, 'render');
    spyOn(shedModel.wallThree, 'render');
    spyOn(shedModel.wallFour, 'render');

    shedModel.render();

    expect(shedModel.roof.render).toHaveBeenCalled();
    expect(shedModel.wallOne.render).toHaveBeenCalled();
    expect(shedModel.wallTwo.render).toHaveBeenCalled();
    expect(shedModel.wallThree.render).toHaveBeenCalled();
    expect(shedModel.wallFour.render).toHaveBeenCalled();
  });


});
