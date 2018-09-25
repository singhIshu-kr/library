import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://library-mongo-service.herokuapp.com/'
});
