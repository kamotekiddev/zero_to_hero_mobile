export interface ApiResponse<T> {
    message: 'Success' | 'Failed';
    data: T;
}
