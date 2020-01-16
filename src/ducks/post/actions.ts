import { Post } from "../../models/Post";
import { EPostActionTypes, PostActionTypes } from "./types";
import { Dispatch } from "redux";

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
        isError: true
    })
}

export const setIsLoading = (dispatch: Dispatch<PostActionTypes>, isLoading: boolean) => {
    dispatch({
        type: EPostActionTypes.IS_LOADING,
        isLoading
    })
}

export { fetchPosts, fetchPostsError}


