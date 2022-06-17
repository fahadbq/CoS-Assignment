import axios from "axios";

const instance = axios.create({
  baseURL: `http://23.21.204.21:8080/api/v1`,
});

instance.interceptors.request.use((request) => {
  if (localStorage.getItem("token")) {
    request.headers.Authorization = `${localStorage.getItem("token")}`;
  }

  return request;
});

export default instance;
