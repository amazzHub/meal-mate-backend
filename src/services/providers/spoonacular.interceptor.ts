import axios from 'axios';

export const spoonacularApi = axios.create({ baseURL: process.env.SPOONACULAR_BASE_URL });

spoonacularApi.interceptors.request.use(
    async (config: any) => {
        config.headers.Accept = 'application/json';
        const apiKey = process.env.SPOONACULAR_API_KEY;
        config.url += `${config.url.includes('?') ? '&' : '?'}apiKey=${apiKey}`;
        return config;
    },
    error => Promise.reject(error)
);