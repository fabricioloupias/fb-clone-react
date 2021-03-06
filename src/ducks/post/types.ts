import { Post } from "../../models/Post";

export enum EPostActionTypes {
    ADD_POST = 'ADD_POST',
    ADD_POST_SUCCESS = 'ADD_POST_SUCCESS',
    ADD_POST_ERROR = 'ADD_POST_ERROR',
    FETCH_POSTS = 'FETCH_POSTS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    DELETE_POST = 'DELETE_POST',
    DELETE_POST_ERROR = 'DELETE_POST_ERROR',
    GET_POST = 'GET_POST',
    GET_POST_COMPLETED = 'GET_POST_COMPLETED',
    GET_POST_ERROR = 'GET_POST_ERROR',
    IS_LOADING = 'IS_LOADING'
}

export interface IAddPostAction {
    type: EPostActionTypes.ADD_POST;
    payload: Post;
}

export interface IAddPostSuccessAction {
    type: EPostActionTypes.ADD_POST_SUCCESS;
    payload: Post;
    isSuccess: boolean;
}

export interface IAddPostErrorAction {
    type: EPostActionTypes.ADD_POST_ERROR;
    isError: boolean;
}

export interface IFetchPostsAction {
    type: EPostActionTypes.FETCH_POSTS;
    payload: Post[];
}

export interface IFetchPostsErrorAction {
    type: EPostActionTypes.FETCH_POSTS_ERROR;
    isError: boolean;
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

export type PostActionTypes = IAddPostAction | IAddPostSuccessAction | IAddPostErrorAction | IFetchPostsAction | IGetPostAction | IDeletePostAction | IIsLoading | IFetchPostsErrorAction;