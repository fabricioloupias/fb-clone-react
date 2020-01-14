import { Post } from "../models/Post";

export enum EPostActionTypes {
    ADD_POST = 'ADD_POST',
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    DELETE_POST = 'DELETE_POST',
    GET_POST = 'GET_POST',
    IS_LOADING = 'IS_LOADING'
}

export interface IAddPostAction {
    type: EPostActionTypes.ADD_POST;
    payload: Post;
}

export interface IFetchPostsAction {
    type: EPostActionTypes.FETCH_POSTS;
    payload: Post[];
}

export interface IGetPostAction {
    type: EPostActionTypes.GET_POST;
    payload: string;
}

export interface IDeletePostAction {
    type: EPostActionTypes.DELETE_POST;
    payload: string;
}

export interface IIsLoading {
    type: EPostActionTypes.IS_LOADING,
    isLoading: boolean
}

export interface IFetchPostsError {
    type: EPostActionTypes.FETCH_POSTS_ERROR
}

export type PostActionTypes = IAddPostAction | IFetchPostsAction | IGetPostAction | IDeletePostAction | IIsLoading | IFetchPostsError;