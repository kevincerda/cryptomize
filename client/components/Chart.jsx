import React, { Component } from 'react';

export default class Chart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="container" id="chart">
        <div className="row">
          <div className="col-12">
            <h3>Chart</h3>
          </div>
        </div>
      </section>
    );
  }
}
