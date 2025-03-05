import request from "../utils/request";

const userAPI = {
  getAll: () => request.get("/account_user"),
  getById: (id) => request.get(`/account_user/${id}`),
  delete: (id) => request.delete(`/account_user/${id}`),
};

export default userAPI;
