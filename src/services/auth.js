import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.statusCode == 401) {
      localStorage.clear();
    }
    return Promise.reject(error);
  }
);

export function loginAPI(requestBody) {
  return axios.post("http://localhost:3001/login", requestBody);
}

export function dataAPI() {
  return axios.post("http://localhost:3001/data", {});
}
