import axios from 'axios';

const api = axios.create({
   baseURL: 'http://192.168.31.142:4001',
});

export default api;