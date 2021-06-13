import axios, { AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3000/api', //only for local ( we should add baseURL based on the ENV variable.
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const axiosRequest = async (options: AxiosRequestConfig) => {
  return axiosClient(options);
};
