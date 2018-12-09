import axios from 'axios';

const URI = 'https://api.coindesk.com/v1/bpi/currentprice.json';

const getRealTimeData = props => {
  return axios.get(URI);
};

export default getRealTimeData;
