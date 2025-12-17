import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { getEnvVariables } from "../helper/getEnvVariables";
import { getData } from "../helper/localStorage";

const { REACT_APP_API_URL } = getEnvVariables();

const vocabularyApi = axios.create({
    baseURL: REACT_APP_API_URL
})

vocabularyApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    
    const token = getData().token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
});

vocabularyApi.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login"; // navigate("/login")
      }
      return Promise.reject(error);
    }
  );

export const api = {
    get: <T>(url: string, config?: AxiosRequestConfig) =>
        vocabularyApi.get<T>(url, config),
    
    post: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        vocabularyApi.post<T>(url, data, config),

    put: <T>(url: string, data?: any, config?: AxiosRequestConfig) =>
        vocabularyApi.put<T>(url, data, config),
    
};

export default vocabularyApi;