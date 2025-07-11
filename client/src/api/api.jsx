import axios from 'axios';
import { logoutUser } from '../utils/logoutHelper';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL +'/api' || 'http://localhost:5000/api',
});

// Attach token from localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global error handling
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      logoutUser(); // Token expired or invalid
    }
    return Promise.reject(error);
  }
);

export default API;
