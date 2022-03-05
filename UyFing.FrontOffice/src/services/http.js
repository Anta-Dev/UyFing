import axios from "axios";

const http = axios.create({
  baseURL: "url",
});

http.interceptors.request.use(function (config) {
  // agregar token
  if (localStorage.getItem("user")) {
    const token = JSON.parse(localStorage.getItem("user")).token;
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default http;
