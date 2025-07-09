import { API_URL } from '@env';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);
