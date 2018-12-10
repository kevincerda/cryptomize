import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import Chart from 'chart.js';

export default class ResultsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: '1-years'
    };
    this.buildChart = this.buildChart.bind(this);
    this.handleDateRangeClick = this.handleDateRangeClick.bind(this);
    this.fetchHistoricalData = this.props.fetchHistoricalData.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.dataLoaded !== this.props.dataLoaded) {
      this.buildChart(this.props.labels, this.props.values);
    }
  }

  buildChart(labels, values) {
    const canvas = findDOMNode(this.refs.chart);
    const ctx = canvas.getContext('2d');
    let chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'BITCOIN',
            color: 'rgba(255, 186, 0, 1)',
            borderColor: 'rgb(255, 186, 0)',
            data: values
          }
        ]
      }
    });
  }

  handleDateRangeClick(e) {
    e.preventDefault();
    const activeName = e.target.name;
    this.setState({ activeBtn: activeName });
    const nameParams = activeName.split('-');
    const endValue = moment()
      .subtract(nameParams[0], nameParams[1])
      .format('YYYY-MM-DD')
      .toString();
    this.fetchHistoricalData(endValue, this.props.todaysDate);
  }

  render() {
    return (
      <section className="new-section container-fluid" id="chart">
        <div className="container">
          <div className="row">
            <div className="col-6" id="config-panel">
              <button
                className={
                  this.state.activeBtn === '7-days' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'7-days'}
              >
                7 Days
              </button>
              <button
                className={
                  this.state.activeBtn === '1-months' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'1-months'}
              >
                1 Month
              </button>
              <button
                className={
                  this.state.activeBtn === '3-months' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'3-months'}
              >
                3 Months
              </button>
              <button
                className={
                  this.state.activeBtn === '6-months' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'6-months'}
              >
                6 Months
              </button>
              <button
                className={
                  this.state.activeBtn === '1-years' ? 'btn active' : 'btn '
                }
                onClick={this.handleDateRangeClick}
                name={'1-years'}
              >
                Year To Date
              </button>
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
