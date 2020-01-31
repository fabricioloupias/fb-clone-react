import { Dispatch } from "redux";
import { newsTypes } from "./index";
import { News } from "../../models/News";

const fetchNews = (dispatch: Dispatch<newsTypes.NewsActionTypes>, news: News[]) => {
    dispatch({
        type: newsTypes.ENewsActionTypes.FETCH_NEWS,
        payload: news
    });
}

export { fetchNews };