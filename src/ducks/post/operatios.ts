import { EPostActionTypes, PostActionTypes } from './types';
import { Dispatch } from "redux";
import axios from 'axios';
import { API_PATH } from '../../constants/api';
import { fetchPosts, fetchPostsError, setIsLoading } from './actions';

export function fetchPostsAction(dispatch: Dispatch<PostActionTypes>) {
    setIsLoading(dispatch, true);
    axios
        .get(`${API_PATH}/posts`)
        .then(response => {
            setIsLoading(dispatch, false);
            const posts = response.data;
            fetchPosts(dispatch, posts);
        })
        .catch((e) => {
            fetchPostsError(dispatch);
            setIsLoading(dispatch, false);
        })
}   