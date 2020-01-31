import { Post } from "../../models/Post";
import { IAppState } from "../../store/IAppState";
import { newsTypes } from "./index";

const newsReducerInitialState: IAppState = {
    data: [],
    isLoading: false,
    error: false
}

const newsReducer = (state = newsReducerInitialState, action: newsTypes.NewsActionTypes): IAppState => {
    switch (action.type) {
        case newsTypes.ENewsActionTypes.FETCH_NEWS:
            return {
                ...state,
                data: action.payload,
                isLoading: true
            }
        default:
            return state;
    }
}

export default newsReducer;
