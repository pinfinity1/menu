import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:9090/api/v1/",
});

export default client;
