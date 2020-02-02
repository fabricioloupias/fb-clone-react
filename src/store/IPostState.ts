import { PostResponse } from "../models/PostResponse";

export interface IPostState {
    data: PostResponse,
    isLoading: boolean,
    error: boolean;
}