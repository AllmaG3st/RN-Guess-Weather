import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const APP_ID = '372c4a71abaf810f91556e42b73cf45e';

const ApiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: APP_ID,
    units: 'metric',
  },
});

export default ApiClient;
