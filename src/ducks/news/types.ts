import { News } from "../../models/News";

export enum ENewsActionTypes {
    FETCH_NEWS = 'FETCH_NEWS',
    FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR',
    IS_LOADING = 'IS_LOADING'
}

export interface IFetchNews {
    type: ENewsActionTypes.FETCH_NEWS;
    payload: News[];
}

export interface IFetchErrorNews {
    type: ENewsActionTypes.FETCH_NEWS_ERROR;
    isError: boolean;
}

export type NewsActionTypes = IFetchNews | IFetchErrorNews;

