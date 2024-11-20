import axios, { CreateAxiosDefaults } from "axios";

const axiosConfig: CreateAxiosDefaults = {
  baseURL: "http://localhost:4000",
  withCredentials: true,
};

export const httpClient = axios.create(axiosConfig);

httpClient.interceptors.request.use((req) => {
  console.log("es aris ...");
  return req;
});

httpClient.interceptors.response.use((res) => {
  console.log("es aris ...");
  return res;
}, (err) => {
  console.log(err);
  
});