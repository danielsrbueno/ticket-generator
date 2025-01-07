import axios from 'axios';
require('dotenv').config();

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const api = axios.create({
    baseURL: backendUrl,
});

export default api;