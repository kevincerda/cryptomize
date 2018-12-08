import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className="jumbotron jumbotron-fluid container" id="header">
        <div className="container">
          <h1 className="display-4">Welcome to Cryptomize</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </header>
    );
  }
}
