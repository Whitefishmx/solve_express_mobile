import axios from 'axios';
import { StorageAdapter } from './adapters/async/storage';

export const API_URL = process.env.EXPO_PUBLIC_ENV === 'production' ? process.env.EXPO_PUBLIC_API_URL_PRO : process.env.EXPO_PUBLIC_API_URL_DEV;

const providerApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

providerApi.interceptors.request.use(async config => {
    const token = await StorageAdapter.getItem('token');
    
    if (token) {
        config.headers['Authorization'] = `Bearer ${token} `;
    }
    return config;
});

export { providerApi };
