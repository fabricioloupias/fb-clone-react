import { Post } from "./Post";

export interface PostResponse{
    post: Post;
    user: firebase.UserInfo
}