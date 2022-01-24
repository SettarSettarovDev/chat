import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const apiWithToken = axios.create({
  baseURL: 'http://localhost:5000/',
});

apiWithToken.interceptors.request.use(config => {
  config.headers.authorization = localStorage.getItem('token');
  return config;
});
