import React, { Component } from 'react';
import Header from './Header.jsx';
import ResultsChart from './Chart.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ResultsChart />
      </div>
    );
  }
}
