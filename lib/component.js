class Component {
  constructor() {
    this.children = [];
  }

  render() {
    throw new Error('Child class must implement render() method.');
  }
}








module.exports = Component
