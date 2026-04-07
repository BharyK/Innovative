import apiClient from "./apiClient";

// ✅ GET
export const getApi = (path) => {
    console.log ("Fetching data from:", path);
  return apiClient.get(path);
};

// ✅ POST
export const postApi = (path, data) => {
  return apiClient.post(path, data);
};