import React, { Component } from 'react';
import getRealTimeData from '../services/getHistoricalData';

export default class Header extends Component {
  render() {
    return (
      <header className="jumbotron jumbotron-fluid container" id="header">
        <div className="container">
          <div className="row">
            <div className="col-10">
              <h1 id="currency-heading">BITCOIN (BTC)</h1>
            </div>
            {/* <div className="col-2" id="value-heading">
              <h2>$2405.00 +106%</h2>
            </div> */}
          </div>
        </div>
      </header>
    );
  }
}
