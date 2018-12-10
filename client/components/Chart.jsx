import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import getHistoricalData from '../services/getHistoricalData.js';
import Chart from 'chart.js';

export default class ResultsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: 'YTD'
    };
    this.buildChart = this.buildChart.bind(this);
    this.handleDateRangeClick = this.handleDateRangeClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.dataLoaded !== prevProps.dataLoaded) {
      this.buildChart();
    }
  }

  buildChart() {
    const canvas = findDOMNode(this.refs.chart);
    const ctx = canvas.getContext('2d');
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [
          {
            label: 'BITCOIN',
            color: 'rgba(255, 186, 0, 1)',
            borderColor: 'rgb(255, 186, 0)',
            data: this.props.values
          }
        ]
      }
    });
  }

  handleDateRangeClick(e) {
    e.preventDefault();
    const activeName = e.target.name;
    this.setState({ activeBtn: activeName });
  }

  render() {
    return (
      <section className="new-section container-fluid" id="chart">
        <div className="container">
          <div className="row">
            <div className="col-6" id="config-panel">
              <button
                className={
                  this.state.activeBtn === '7D' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'7D'}
              >
                7 Days
              </button>
              <button
                className={
                  this.state.activeBtn === '1M' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'1M'}
              >
                1 Month
              </button>
              <button
                className={
                  this.state.activeBtn === '3M' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'3M'}
              >
                3 Months
              </button>
              <button
                className={
                  this.state.activeBtn === '6M' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'6M'}
              >
                6 Months
              </button>
              <button
                className={
                  this.state.activeBtn === 'YTD' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'YTD'}
              >
                Year To Date
              </button>
            </div>
            {this.props.dataLoaded ? (
              <div className="chart-container col-12">
                <canvas ref="chart" height="15rem" width="40rem" />
              </div>
            ) : (
              <div>Loading, please Wait</div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
