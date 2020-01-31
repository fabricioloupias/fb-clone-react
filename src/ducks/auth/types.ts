import { User } from "../../models/User";

export enum EAuthActionTypes {
    SIGN_IN = 'SIGN_IN',
    SIGN_UP = 'SIGN_UP',
    SIGN_UP_LOADING = 'SIGN_UP_LOADING',
    SIGN_UP_ERROR = 'SIGN_UP_ERROR',
    SHOW_SIGN_UP = 'SHOW_SIGN_UP',
    SIGN_OUT = 'SIGN_OUT'
}

export interface ISignIn {
    type: EAuthActionTypes.SIGN_IN;
    payload: firebase.UserInfo;
}

export interface ISignUp {
    type: EAuthActionTypes.SIGN_UP;
    payload: User | null;
    message: string | null;
    isUserRegistered: boolean;
}

export interface ISignUpLoading {
    type: EAuthActionTypes.SIGN_UP_LOADING;
    isLoading: boolean;
}
export interface IShowSignUp {
    type: EAuthActionTypes.SHOW_SIGN_UP;
    showSignUp: boolean;
}
export interface ISignUpError {
    type: EAuthActionTypes.SIGN_UP_ERROR;
    message: string;
    isError: boolean;
}

export interface ISignOut {
    type: EAuthActionTypes.SIGN_OUT;
}

export type AuthActionTypes = ISignIn | ISignUp | ISignUpLoading | ISignUpError | IShowSignUp | ISignOut;

