import React, { Component } from 'react';
import Header from './Header.jsx';
import ResultsChart from './Chart.jsx';
import LiveResults from './LiveResults.jsx';
import getHistoricalData from '../services/getHistoricalData.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      currency: 'USD',
      dataLoaded: false
    };
    this.fetchData = this.fetchData.bind(this);
    this.convertObjectToArray = this.convertObjectToArray.bind(this);
    this.getDatesAndValues = this.getDatesAndValues.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    getHistoricalData({
      currency: this.state.currency
    })
      .then(({ data }) => {
        this.setState({ jsonData: data.bpi });
      })
      .then(() => {
        const convertedData = this.convertObjectToArray(this.state.jsonData);
        this.setState({ convertedData: convertedData });
      })
      .then(() => {
        const { dates, values } = this.getDatesAndValues(
          this.state.convertedData
        );
        this.setState({
          dataLabels: dates,
          dataValues: values,
          dataLoaded: true
        });
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
    const { dataLoaded } = this.state;
    return (
      <div>
        <Header />
        {dataLoaded && (
          <ResultsChart
            labels={this.state.dataLabels}
            data={this.state.dataValues}
          />
        )}
        <LiveResults />
      </div>
    );
  }
}
