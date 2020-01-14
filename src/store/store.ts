import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import postReducer from "../reducers/postReducer";
import { AppActions } from "../constants/appActions";
import { composeWithDevTools } from 'redux-devtools-extension';

export const rootReducer = combineReducers({
  postState: postReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)),
);