import axios from "axios";

const client = axios.create({
  baseURL: "https://greenfastfood.cocoadownload.com/api/v1/",
});

export default client;
