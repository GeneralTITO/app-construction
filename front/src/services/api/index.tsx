import axios from "axios";

export const api = axios.create({
  baseURL: "https://app-construct-api.onrender.com",
  timeout: 12000,
});
