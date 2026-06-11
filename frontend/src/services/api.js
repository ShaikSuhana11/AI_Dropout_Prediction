import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-dropout-backend.onrender.com",
});

export default api;
