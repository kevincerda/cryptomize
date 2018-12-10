import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import moment from 'moment';
import Chart from 'chart.js';
import Button from './Button.jsx';

export default class ResultsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBtn: '1-years',
      buttons: [
        { value: '7-days', name: 'Last Week' },
        { value: '1-months', name: 'Last Month' },
        { value: '3-months', name: '3 Months' },
        { value: '6-months', name: '6 Months' },
        { value: '1-years', name: 'Year To Date' }
      ]
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
            <Button
              buttons={this.state.buttons}
              activeBtn={this.state.activeBtn}
              handleDateRangeClick={this.handleDateRangeClick}
            />
            <div className="chart-container col-12">
              <canvas ref="chart" height="15rem" width="40rem" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
