import axios from 'axios';

const URI = 'https://api.coindesk.com/v1/bpi/historical/close.json';

const getHistoricalData = props => {
  return axios.get(URI);
};

export default getHistoricalData;

// ?index=[USD/CNY]The index to return data for. Defaults to USD.
// ?currency=<VALUE>The currency to return the data in, specified in ISO 4217 format. Defaults to USD.
// ?start=<VALUE>&end=<VALUE> Allows data to be returned for a specific date range. Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.
// ?for=yesterdaySpecifying this will return a single value for the previous day. Overrides the start/end parameter.
