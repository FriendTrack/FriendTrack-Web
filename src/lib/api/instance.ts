import axios from "axios";

const $api = axios.create({
  baseURL: "http://89.111.155.61:9001/api/v1/",
});

export default $api;
