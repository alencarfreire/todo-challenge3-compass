import axios from "axios";

const api = axios.create({
  baseURL: "http://52.201.216.58:8080",
});

export default api;
