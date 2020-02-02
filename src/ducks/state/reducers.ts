import { IAppState } from "../../store/IAppState";
import { stateTypes } from "./index";

const authReducerInitialState: IAppState = {
    currentUser: null,
    isError: false,
    message: '',
    isUserRegistered: false,
    isLoading: false,
    showSignUp: false
}

// const authReducer = (state = authReducerInitialState, action: stateTypes.StateActionTypes): IAppState => {
//     switch (action.type) {
//         case authTypes.EAuthActionTypes.SIGN_UP:
//             return {
//                 ...state,
//                 isUserRegistered: action.isUserRegistered
//             }
//         default:
//             return state;
//     }
// }

export default {};
