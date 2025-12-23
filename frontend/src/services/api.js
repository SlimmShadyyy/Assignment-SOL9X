import axios from "axios";

const api = axios.create({
  console.log("API BASE URL:", import.meta.env.VITE_API_BASE_URL);
  baseURL: import.meta.env.VITE_API_BASE_URL || "",
});

export default api;
