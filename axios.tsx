import axios, { AxiosInstance, AxiosResponse } from "axios";

const https: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // withCredentials: false,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  // },
});

https.interceptors.response.use((response: AxiosResponse) => {
  const { data } = response;
  return response.data;
});

export default https;
