import axios from 'axios';
import { constantsApi } from './constans';

export const Api = axios.create({
  baseURL: constantsApi.BASE_URL,
  params: {
    api_key: constantsApi.API_KEY,
    language: 'en-US',
    include_adult: false,
  },
});
