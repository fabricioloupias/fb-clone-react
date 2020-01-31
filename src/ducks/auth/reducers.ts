import { IAppState } from "../../store/IAppState";
import { authTypes } from "./index";

const authReducerInitialState: IAppState = {
    currentUser: null,
    isError: false,
    message: '',
    isUserRegistered: false,
    isLoading: false,
    showSignUp: false
}

const authReducer = (state = authReducerInitialState, action: authTypes.AuthActionTypes): IAppState => {
    switch (action.type) {
        case authTypes.EAuthActionTypes.SIGN_UP:
            return {
                ...state,
                isUserRegistered: action.isUserRegistered
            }
        case authTypes.EAuthActionTypes.SIGN_UP_ERROR:
            return {
                ...state,
                isError: action.isError,
                message: action.message
            }
        case authTypes.EAuthActionTypes.SIGN_UP_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case authTypes.EAuthActionTypes.SHOW_SIGN_UP:
            return {
                ...state,
                showSignUp: action.showSignUp
            }
        case authTypes.EAuthActionTypes.SIGN_IN:
            return {
                ...state,
                currentUser: action.payload
            }
        case authTypes.EAuthActionTypes.SIGN_OUT:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state;
    }
}

export default authReducer;
