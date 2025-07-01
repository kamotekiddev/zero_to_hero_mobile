import { client } from '@/services/apiClient';

interface Response {
    tokenType: 'Bearer';
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
}

export const login = (data: { email: string; password: string }) =>
    client.post<Response>('/login', data);
