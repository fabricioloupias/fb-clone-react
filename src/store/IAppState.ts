import { IPostState } from "./IPostState";
import { INewsState } from "./INewsState";
import { IAuthState } from "./IAuthState";

export type IAppState = IPostState | INewsState | IAuthState;