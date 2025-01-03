import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use((config) => {
  // You can add auth token here if needed
  // const token = localStorage.getItem('token');
  // if (token) {
  //   config.headers['Authorization'] = `Bearer ${token}`;
  // }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  // Handle global errors here (e.g., logout on 401)
  if (error.response && error.response.status === 401) {
    // Handle unauthorized access
    // e.g., redirect to login page or refresh token
  }
  return Promise.reject(error);
});
