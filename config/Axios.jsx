import axios from "axios";
const instance = axios.create({
  //   baseURL: "https://e-zero-server.onrender.com/api",
  baseURL: "http://localhost:8080/api/",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default instance;
