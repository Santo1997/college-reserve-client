import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://endgame-server-iota.vercel.app/",
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
