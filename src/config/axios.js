import axios from "axios";

const instance = axios.create({
  baseURL: `http://23.21.204.21:8080/api/v1`,
});

export default instance;
