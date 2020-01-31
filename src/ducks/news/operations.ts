import { NewsActionTypes } from "./types";
import { Dispatch } from "redux";
import axios from 'axios';
import { newsOperations, newsAction } from ".";

export function fetchNewsAction(dispatch: Dispatch<NewsActionTypes>) {
    axios
        .get('https://newsapi.org/v2/top-headlines?country=ar&apiKey=a37d6ab6bca54bf78cc5535fbee87d1c')
        .then(response => {
            const news = response.data.articles.slice(0,3);
            newsAction.fetchNews(dispatch, news);
        })
}

