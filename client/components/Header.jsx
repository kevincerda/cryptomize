import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <header className="container" id="header">
        <div className="row">
          <div className="col-12">
            <h1>Welcome</h1>
          </div>
        </div>
      </header>
    );
  }
}
