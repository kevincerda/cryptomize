import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header class="jumbotron jumbotron-fluid container" id="header">
        <div class="container">
          <h1 class="display-4">Welcome to Cryptomize</h1>
          <p class="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </header>
    );
  }
}
