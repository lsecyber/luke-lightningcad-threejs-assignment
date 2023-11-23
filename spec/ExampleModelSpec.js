import ExampleModel from '../models/ExampleModel.js'

describe('ExampleModel', () => {
  let model
  beforeEach(() => {
    model = new ExampleModel()
  })

  describe('#vertices', () => {
    it('has seven points', () => {
      expect(model.vertices().length).toBe(7)
    })
  })
})
