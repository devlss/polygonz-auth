import {IApiSignInRequest, IApiSignUpRequest} from "../api/types";

export interface AuthProviderType {
	authed: boolean;
	register: (data: IApiSignUpRequest) => Promise<boolean>
	login: (data: IApiSignInRequest) => Promise<boolean>
	logout: () => Promise<boolean>,
	isLoggedIn: () => Promise<boolean>

};
