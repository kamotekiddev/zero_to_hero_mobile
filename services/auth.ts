import { api } from '@/services/apiClient';

interface LoginResponse {
    tokenType: 'Bearer';
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export const login = (data: { email: string; password: string }) =>
    api.post<LoginResponse>('/login', data);
