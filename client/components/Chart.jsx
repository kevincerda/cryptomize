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
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
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
      <section className="container" id="chart">
        <div className="row">
          <div className="col-12">
            <canvas ref="chart" />
          </div>
        </div>
      </section>
    );
  }
}
