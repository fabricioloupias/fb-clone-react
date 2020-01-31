export interface ServerResponse<T> {
    message: string | null;
    data: T | null;
}