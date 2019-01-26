import axios from 'axios';

const baseURL = 'https://api.github.com/';

const instance = axios.create({
  baseURL,
  timeout: 3000,
});

export default instance;
