import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:4500/',
  //baseURL: 'http://192.168.0.100:4500/',
  //baseURL: process.env.REACT_APP_URL || 'https://rh-backend.herokuapp.com',
  //baseURL: 'https://puntook-core-api.herokuapp.com/',
});

export default api;
