class Component {
  constructor() {
    this.children = [];
  }

  render() {
    throw new Error('Child class must implement render() method.');
  }

  renderInnerHTML() {
    let innerHTML = '';
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      if (typeof child.render === 'function') {
        innerHTML += child.render();
      } else {
        throw new Error('Child component must have a render method.');
      }
    }
    return innerHTML;
  }
}


module.exports = Component


// It's done when a renderInnerHTML() method is placed on the 
// Component class that loops over the children and converts 
// any that aren't strings to strings by calling their render() method.