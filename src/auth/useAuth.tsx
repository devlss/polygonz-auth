import {useEffect, useRef, useState} from 'react';
import {apiGetUserInfo, apiSignIn, apiSignOut, apiSignUp} from '../api/auth';
import {IApiSignInRequest, IApiSignUpRequest} from '../api/types';

export const useAuth = () => {
	const [authed, setAuthed] = useState(false);
	const requested = useRef(false);

	const isLoggedIn = async () => {
		let result: boolean;
		try {
			const user = await apiGetUserInfo();
			result = Boolean(user);
		} catch (error) {
			result = false;
		}
		setAuthed(result);
		return result;
	};

	useEffect(() => {
		const asyncFn = async () => {
			if (!requested.current && !authed) {
				await isLoggedIn();
				requested.current = true;
			}
		};
		asyncFn();
	}, [authed]);

	return {
		authed,
		async register(data: IApiSignUpRequest) {
			let result = await apiSignUp(data);
			setAuthed(result);
			return result;
		},
		async login(data: IApiSignInRequest) {
			const result = await apiSignIn(data);
			setAuthed(result);
			return result;
		},
		async logout() {
			const result = await apiSignOut();
			if (result) {
				setAuthed(false);
			}
			return result;
		},
		isLoggedIn
	};
};
