import axios from "axios";

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_INTUJI_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
