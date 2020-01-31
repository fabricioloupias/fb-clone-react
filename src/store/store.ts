import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import postReducer from "../ducks/post/reducers";
import { AppActions } from "../constants/appActions";
import { composeWithDevTools } from 'redux-devtools-extension';
import newsReducer from "../ducks/news/reducers";
import authReducer from '../ducks/auth/index';

export const rootReducer = combineReducers({
  post: postReducer,
  news: newsReducer,
  auth: authReducer 
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)),
);