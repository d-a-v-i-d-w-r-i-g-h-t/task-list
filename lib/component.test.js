// Constructor Component is imported.
const Component = require('./component.js');



// A testing suite for Component is created.
describe('Component', () => {

  // A test is created to check that the children array is empty by default.
  describe('children', () => {
    it('should be empty by default', () => {

      // Arrange
      const emptyArray = [];

      // Act
      const component = new Component;
      
      // Assert
      expect(component.children).toEqual(emptyArray);

    });
  });

  // A test is created to check that component takes in children.
  describe('children', () => {
    it('should take in children', () => {

      // Arrange
      const newChild = 'child';
      const oneChildArray = [newChild];

      // Act
      const component = new Component;
      component.children.push(newChild);

      // Assert
      expect(component.children).toEqual(oneChildArray);
      
    });
  });

  // A test is created to check that render() throws an error.
  describe('render()', () => {
    it('should throw an error', () => {

      // Arrange
      const component = new Component;
      const cb = () => component.render();
      const err = new Error('Child class must implement render() method.');

      // Act/Assert
      expect(cb).toThrowError(err)
      expect(cb).toThrow();
      
    });
  });


});

