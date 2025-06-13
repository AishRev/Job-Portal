// src/api/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);
export const updateProfile = (formData) => API.put('/users/profile', formData);
export const fetchJobs = (search) => API.get(`/jobs?search=${search}`);
export const applyJob = (jobId) => API.post('/applications', { jobId });
export const getStatusCounts = () => API.get('/applications/status');
export const getCalendarData = () => API.get('/applications/calendar');

export default API;
