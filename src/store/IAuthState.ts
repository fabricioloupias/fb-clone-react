
export interface IAuthState {
    currentUser: firebase.UserInfo | null;
    message: string;
    isError: boolean;
    isUserRegistered: boolean;
    isLoading: boolean;
    showSignUp: boolean;
}