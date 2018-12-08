import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Chart from 'chart.js';

export default class ResultsChart extends Component {
  constructor() {
    super();
    this.state = {
      chartConfig: {
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
          ],
          datasets: [
            {
              label: 'BITCOIN',
              color: 'rgba(255, 186, 0, 1)',
              borderColor: 'rgb(255, 186, 0)',
              data: [0, 10, 5, 2, 20, 30, 45]
            }
          ]
        },
        type: 'line',
        options: {}
      }
    };
    this.buildChart = this.buildChart.bind(this);
  }

  componentDidMount() {
    this.buildChart(this.state.chartConfig);
  }

  buildChart(options) {
    const canvas = findDOMNode(this.refs.chart);
    const ctx = canvas.getContext('2d');
    let chart = new Chart(ctx, options);
  }

  render() {
    return (
      <section className="container-fluid" id="chart">
        <div className="container">
          <div className="row">
            <div className="chart-container col-12">
              <canvas ref="chart" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
