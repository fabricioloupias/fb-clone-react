import { Dispatch } from "redux";
import { authTypes } from "./index";
import { User } from "../../models/User";
import { ServerResponse } from "../../models/ServerResponse";

const signIn = (dispatch: Dispatch<authTypes.AuthActionTypes>, user: firebase.UserInfo) => {
    dispatch({
        type: authTypes.EAuthActionTypes.SIGN_IN,
        payload: user
    })
}

const signUp = (dispatch: Dispatch<authTypes.AuthActionTypes>, response: ServerResponse<User>) => {
    dispatch({
        type: authTypes.EAuthActionTypes.SIGN_UP,
        payload: response.data,
        message: response.message,
        isUserRegistered: true
    });
}

const signUpError = (dispatch: Dispatch<authTypes.AuthActionTypes>, message: string) => {
    dispatch({
        type: authTypes.EAuthActionTypes.SIGN_UP_ERROR,
        message: message,
        isError: true
    });
}

const setIsLoading = (dispatch: Dispatch<authTypes.AuthActionTypes>, isLoading: boolean) => {
    dispatch({
        type: authTypes.EAuthActionTypes.SIGN_UP_LOADING,
        isLoading
    })
}

const signOut = (dispatch: Dispatch<authTypes.AuthActionTypes>) => {
    dispatch({
        type: authTypes.EAuthActionTypes.SIGN_OUT
    })
}

const setShowSignUp = (dispatch: Dispatch<authTypes.AuthActionTypes>, showSignUp: boolean) => {
    dispatch({
        type: authTypes.EAuthActionTypes.SHOW_SIGN_UP,
        showSignUp
    })
}

export { signUp, signUpError, setIsLoading, setShowSignUp, signIn, signOut };