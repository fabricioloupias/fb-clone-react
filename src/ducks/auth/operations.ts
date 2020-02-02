import { Dispatch } from "redux";
import axios from 'axios';
import { authOperations, authAction, authTypes } from ".";
import { API_PATH, API_PATH_AUTH } from '../../constants/api'
import { AuthActionTypes } from "./types";
import { User } from "../../models/User";
import { StateActionTypes } from "../state/types";

const API_URL = `${API_PATH}${API_PATH_AUTH}`

export function signUpAction(dispatch: Dispatch<AuthActionTypes>, user: User) {
    authAction.setIsLoading(dispatch, true);
    axios
        .post(`${API_URL}/signUp`, user)
        .then(response => {
            authAction.signUp(dispatch, response.data);
            authAction.setIsLoading(dispatch, false);
            setShowSignUp(dispatch, false);
        })
        .catch(error => {
            setShowSignUp(dispatch, true)
            authAction.signUpError(dispatch, error);
            authAction.setIsLoading(dispatch, false);
        })
}

export function signIn(dispatch: Dispatch<AuthActionTypes>, user: firebase.UserInfo) {
    authAction.signIn(dispatch, user);
}

export function signOut(dispatch: Dispatch<AuthActionTypes>) {
    authAction.signOut(dispatch);
    authAction.clearState(dispatch);
}

export function setShowSignUp(dispatch: Dispatch<AuthActionTypes>, showSignUp: boolean) {
    authAction.setShowSignUp(dispatch, showSignUp);
}

