import axios from 'axios';
// const base='https://api-contas.herokuapp.com/'
const base = 'https://eec4-2804-774-8102-6e51-94ee-3ed-c744-ef44.sa.ngrok.io'
export const api = axios.create({
  baseURL: base,

});
axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'true';
export const brasilApi = axios.create({
  baseURL: 'http://brasilapi.simplescontrole.com.br/mercadoria/consulta/'
});

// ?ean=7896445490550&access-token=U3oS12OA-L1RqG8zc9tS-8K4IKxXVp1r&_format=json