import React, { Component } from 'react';
import Header from './Header.jsx';
import ResultsChart from './Chart.jsx';
import LiveResults from './LiveResults.jsx';
import getHistoricalData from '../services/getHistoricalData.js';
import moment from 'moment';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'USD',
      dataLoaded: false,
      dataLabels: [],
      dataValues: [],
      startDate: moment()
        .format('YYYY-MM-DD')
        .toString(),
      endDate: moment()
        .subtract(1, 'years')
        .format('YYYY-MM-DD')
        .toString()
    };

    this.fetchHistoricalData = this.fetchHistoricalData.bind(this);
    this.convertObjectToArray = this.convertObjectToArray.bind(this);
    this.getDatesAndValues = this.getDatesAndValues.bind(this);
  }

  componentDidMount() {
    const todaysDate = this.state.startDate;
    const endDate = this.state.endDate;
    this.fetchHistoricalData(endDate, todaysDate);
  }

  fetchHistoricalData(start, end) {
    getHistoricalData(start, end)
      .then(({ data }) => {
        // Sets raw json data
        this.setState({ jsonData: data.bpi });
      })
      .then(() => {
        // converts raw data to an array
        const convertedData = this.convertObjectToArray(this.state.jsonData);
        this.setState({ convertedData: convertedData });
      })
      .then(() => {
        // splits dates and values for chart input
        const { dates, values } = this.getDatesAndValues(
          this.state.convertedData
        );
        this.setState({
          dataLabels: dates,
          dataValues: values
        });
      })
      .then(() => {
        this.setState({ dataLoaded: !this.state.dataLoaded });
      })
      .catch(error => {
        console.error(error);
      });
  }

  convertObjectToArray(jsonDataObj) {
    const dataArray = [];
    for (let i in jsonDataObj) {
      dataArray.push([i, jsonDataObj[i]]);
    }
    return dataArray;
  }

  getDatesAndValues(array) {
    return array.reduce(
      (obj, result) => {
        const date = result[0];
        const value = result[1];
        obj.dates.push(date);
        obj.values.push(value);
        return obj;
      },
      { dates: [], values: [] }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <ResultsChart
          dataLoaded={this.state.dataLoaded}
          labels={this.state.dataLabels}
          values={this.state.dataValues}
          todaysDate={this.state.startDate}
          fetchHistoricalData={this.fetchHistoricalData}
        />
        <LiveResults />
      </div>
    );
  }
}
