import axios from 'axios';

export const contactSend = axios.create({
  baseURL: 'https://webhook.site/e96c7ff2-e854-44c6-aba3-1f70107fc6e9',
});

export const getData = axios.create({
  baseURL: 'https://accenture-server-rn.herokuapp.com/',
});
