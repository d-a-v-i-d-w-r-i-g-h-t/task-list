const { formatDate } = require('./date');
const { Component } = require('./component');


class Header extends Component {
  constructor() {
    super();

  }

  render() {
    return `<header class="header"><h1>Todo Today</h1><p>${formatDate}</p></header>`
  }

}