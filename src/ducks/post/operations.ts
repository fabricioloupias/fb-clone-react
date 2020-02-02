import { EPostActionTypes, PostActionTypes } from './types';
import { Dispatch } from "redux";
import axios from 'axios';
import { API_PATH, API_PATH_POSTS } from '../../constants/api';
import { postAction} from './index';
import { Post } from '../../models/Post';

const API_URL = `${API_PATH}${API_PATH_POSTS}`

export function fetchPostsAction(dispatch: Dispatch<PostActionTypes>, userId: string) {
    postAction.setIsLoading(dispatch, true);
    axios
        .post(`${API_URL}/getPostsFriends`, {userId})
        .then(response => {
            postAction.setIsLoading(dispatch, false);
            const posts = response.data.data;
            postAction.fetchPosts(dispatch, posts);
        })
        .catch((e) => {
            postAction.fetchPostsError(dispatch);
            postAction.setIsLoading(dispatch, false);
        })
}   

export function addPostAction(dispatch: Dispatch<PostActionTypes>, post: Post, user: firebase.UserInfo){
    axios   
        .post(`${API_PATH}/posts`, {post, user})
        .then(response => {
            if(response.status)
                postAction.addPost(dispatch, response.data);
        })
        .catch((e: Error) => {
            postAction.addPostError(dispatch, e.message);
        })
}