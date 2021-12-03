import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.metaweather.com/api/",
});

instance.interceptors.request.use(
  (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    return Promise.reject(err);
  }
);
export default instance;
