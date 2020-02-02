import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import postReducer from "../ducks/post/reducers";
import { AppActions } from "../constants/appActions";
import { composeWithDevTools } from 'redux-devtools-extension';
import newsReducer from "../ducks/news/reducers";
import authReducer from '../ducks/auth/index';
import { stateTypes } from "../ducks/state";


const appReducer = combineReducers({
  post: postReducer,
  news: newsReducer,
  auth: authReducer
})

const rootReducer = (state: any, action: any) => {
  if(action.type === stateTypes.EStateActionTypes.CLEAR_STATE){
    state = undefined
  }
  return appReducer(state, action)
}

// export const rootReducer = combineReducers({

// });

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)),
);