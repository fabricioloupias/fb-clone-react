import { User } from "../../models/User";

export enum EStateActionTypes {
    CLEAR_STATE = 'CLEAR_STATE',
}

export interface IClearState {
    type: EStateActionTypes.CLEAR_STATE;
}

export type StateActionTypes = IClearState;

