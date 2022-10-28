import axios from 'axios';
const base='https://api-contas.herokuapp.com/'
export const api = axios.create({
  baseURL: base
});

