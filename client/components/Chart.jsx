import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import getHistoricalData from '../services/getHistoricalData.js';
import Chart from 'chart.js';

export default class ResultsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLabels: props.labels,
      dataValues: props.data
    };
    this.buildChart = this.buildChart.bind(this);
  }

  componentDidMount() {
    this.buildChart();
  }

  buildChart() {
    const canvas = findDOMNode(this.refs.chart);
    const ctx = canvas.getContext('2d');
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.state.dataLabels,
        datasets: [
          {
            label: 'BITCOIN',
            color: 'rgba(255, 186, 0, 1)',
            borderColor: 'rgb(255, 186, 0)',
            data: this.state.dataValues
          }
        ]
      }
    });
  }

  render() {
    return (
      <section className="new-section container-fluid" id="chart">
        <div className="container">
          <div className="row">
            <div className="col-12" id="config-panel">
              <button className="button">7 Days</button>
              <button className="button active">1 Month</button>
              <button className="button">3 Months</button>
              <button className="button">6 Months</button>
              <button className="button">1 Year</button>
              <button className="button">Year To Date</button>
            </div>
            <div className="chart-container col-12">
              <canvas ref="chart" height="15rem" width="40rem" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
