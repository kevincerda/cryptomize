import axios from 'axios';

const URI = 'https://api.coindesk.com/v1/bpi/historical/close.json';

const getHistoricalData = (start, end) => {
  return axios.get(`${URI}?start=${start}&end=${end}`);
};

export default getHistoricalData;

// ?start=<VALUE>&end=<VALUE> Allows data to be returned for a specific date range.
// ?start=${props.start}&end=${props.end}
//Must be listed as a pair of start and end parameters, with dates supplied in the YYYY-MM-DD format, e.g. 2013-09-01 for September 1st, 2013.
// ?for=yesterdaySpecifying this will return a single value for the previous day. Overrides the start/end parameter.
