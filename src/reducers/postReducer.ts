import { Post } from "../models/Post";
import { PostActionTypes, EPostActionTypes } from "../constants/postActionType";
import { IAppState } from "../store/IAppState";



const postReducerInitialState: IAppState = {
    data: [],
    isLoading: false,
    error: false
}

const postReducer = (state = postReducerInitialState, action: PostActionTypes): IAppState => {
    switch (action.type) {
        case EPostActionTypes.FETCH_POSTS:
            return {
                ...state,
                data: action.payload,
                isLoading: true
            }
        case EPostActionTypes.FETCH_POSTS_ERROR:
            return {
                ...state,
                error: true
            }
        case EPostActionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export default postReducer;
