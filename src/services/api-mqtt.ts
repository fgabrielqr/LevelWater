import axios from "axios";

const api = axios.create({
  baseURL: "http://100.64.152.14:4001",
});

export default api;
