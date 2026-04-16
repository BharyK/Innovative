import apiClient from "./apiClient";

// ✅ GET
export const getApi = (path) => {
  return apiClient.get(path);
};

// ✅ POST
export const postApi = (path, data) => {
  return apiClient.post(path, data);
};

export const putApi = (path, data) => {
  return apiClient.put(path, data);
};

// ✅ PATCH (Partial Update)
export const patchApi = (path, data) => {
  return apiClient.patch(path, data);
};

// ✅ DELETE
export const deleteApi = (path) => {
  return apiClient.delete(path);
};
