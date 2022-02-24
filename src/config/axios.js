import axios from 'axios';

const clientAxios = axios.create({
  baseURL: 'http://localhost:4000/api/products',
  headers: { 'Content-Type': 'application/json' },
});

export default clientAxios;
