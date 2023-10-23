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

  // A test is created to check that renderInnerHTML() verifies that each child is a string
  describe('render()', () => {
    it('should throw an error', () => {

      // Arrange
      const component = new Component;
      const cb = () => component.renderInnerHTML();
      const err = new Error('Child component must have a render method.');

      // Act
      component.children.push('child1');
      component.children.push('child2');
      component.children.push(12345);

      //Assert
      expect(cb).toThrowError(err)
      expect(cb).toThrow();
      
    });
  });

  // thank you chatGPT:
  describe('renderInnerHTML()', () => {
    it('should loop through children and call render function if not a string', () => {

      // Arrange
      const component = new Component();
      const child1 = {
        render: jest.fn(() => 'renderedChild1'),
      };
      const child2 = 'child2';
      const child3 = {
        render: jest.fn(() => 'renderedChild3'),
      };
  
      // Act
      component.children.push(child1);
      component.children.push(child2);
      component.children.push(child3);
      component.renderInnerHTML();
  
      // Assert
      
      // Ensure that render function is called for appropriate children
      expect(child1.render).toHaveBeenCalled();
      expect(child3.render).toHaveBeenCalled();
  
      // Ensure that the children array is updated with the rendered values
      expect(component.children).toEqual(['renderedChild1', 'child2', 'renderedChild3']);

    });
  });
  



});

