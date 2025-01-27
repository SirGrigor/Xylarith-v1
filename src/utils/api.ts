import axios, { 
  AxiosError, 
  InternalAxiosRequestConfig,
  AxiosResponse 
} from 'axios';

interface ImportMetaEnv {
  VITE_API_URL: string;
}

const api = axios.create({
  baseURL: (import.meta.env as ImportMetaEnv).VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
