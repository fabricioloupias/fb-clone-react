import { News } from "../models/News";

export interface INewsState {
    data: any | News[],
    isLoading: boolean,
    error: boolean;
}