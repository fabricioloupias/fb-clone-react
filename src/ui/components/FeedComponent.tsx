import React from 'react';
import { Post } from '../../models/Post';
import PostComponent from './PostComponent';

const FeedComponent = (props: any): any => {
    const posts : Post[] = props.posts;
    if(posts.length > 0){
        return posts.map((post, index) => {
            return <PostComponent key={index} post={post}></PostComponent>
        })
    }
    return null
}

export default FeedComponent;