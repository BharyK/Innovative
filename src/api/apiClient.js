import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://vinnovativeapi.azurewebsites.net/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Add token automatically (if needed)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("api_token");
    if (token) {
      config.headers.Authorization = `token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🌐 Handle global errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default apiClient;