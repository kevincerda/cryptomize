import React, { Component } from 'react';
import Header from './Header.jsx';
import Chart from './Chart.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Chart />
      </div>
    );
  }
}
