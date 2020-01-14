import { Post } from "../models/Post";
import axios from 'axios';
import { API_PATH } from '../constants/api';
import { EPostActionTypes, IFetchPostsAction, PostActionTypes } from "../constants/postActionType";
import { UtilActionType, IIsLoading } from "../constants/utilActionTypes";
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk';

export interface IPostState {
    readonly posts: Post[];
}

const fetchPosts = (dispatch: Dispatch<PostActionTypes>, posts: Post[]) => {
    dispatch({
        type: EPostActionTypes.FETCH_POSTS,
        payload: posts
    });
}

const fetchPostsError = (dispatch: Dispatch<PostActionTypes>) => {
    dispatch({
        type: EPostActionTypes.FETCH_POSTS_ERROR,
    })
}

export const setIsLoading = (dispatch: Dispatch, isLoading: boolean) => {
    dispatch({
        type: EPostActionTypes.IS_LOADING,
        isLoading
    })
}


export function setLoading(dispatch: Dispatch<PostActionTypes>) {
    return dispatch({
        type: EPostActionTypes.IS_LOADING,
        isLoading: true
    })
}

export function fetchPostsAction(dispatch: Dispatch<PostActionTypes>) {
    console.log('repeat')
    axios
        .get(`${API_PATH}/posts`)
        .then(response => {
            dispatch({
                type: EPostActionTypes.FETCH_POSTS,
                payload: response.data
            });
        })
        .catch(() => {
            fetchPostsError(dispatch);
        })
    // dispatch({
    //     type: EPostActionTypes.FETCH_POSTS,
    //     payload: response.data
    // });
}

