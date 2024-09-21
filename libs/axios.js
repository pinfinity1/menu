import axios from "axios";

const client = axios.create({
  baseURL: "http://greenfastfood.cocoadownload.com/api/v1/",
});

export default client;
