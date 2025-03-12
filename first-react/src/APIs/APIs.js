import axios from "axios";

export const userAPI  =axios.create({
    baseURL: 'http://localhost:5000/user',
    headers: {
        "Content-Type": "application/json",
      },
});
export const itemAPI = axios.create({
  baseURL: 'http://localhost:5000/items',
  headers: {
    "Content-Type": "application/json",
  },
});