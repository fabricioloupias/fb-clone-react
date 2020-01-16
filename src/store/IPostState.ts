import { Post } from "../models/Post";

export interface IPostState {
    data: Post | Post[],
    isLoading: boolean,
    error: boolean;
}