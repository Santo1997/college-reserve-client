import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

const api = {
  get: (url) => {
    return axiosInstance.get(url);
  },
  post: (url, data) => {
    return axiosInstance.post(url, data);
  },
  put: (url, data) => {
    return axiosInstance.put(url, data);
  },
  delete: (url) => {
    return axiosInstance.delete(url);
  },
};

export default api;
