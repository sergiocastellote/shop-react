import axios from 'axios';
import { BASEDOMAIN } from '../constans/urls';

export const get = (url: string) => {
  return axios.get(BASEDOMAIN + url);
};

export const getById = (url: string, id: string) => {
  return axios.get(BASEDOMAIN + url + '/' + id);
};
