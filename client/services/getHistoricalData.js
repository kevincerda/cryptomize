import axios from 'axios';

const URI = 'https://api.coindesk.com/v1/bpi/historical/close.json';

const getHistoricalData = (start, end) => {
  return axios.get(`${URI}?start=${start}&end=${end}`);
};

export default getHistoricalData;
