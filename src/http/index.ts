import axios from "axios";

export const API_URL = "http://task-treking/backend/public/api";

const $axios = axios.create({
    withCredentials: false,
    baseURL: API_URL
})

$axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $axios;