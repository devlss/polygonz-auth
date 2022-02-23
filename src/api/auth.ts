import {ax} from './init';
import {IApiSignUpRequest, IApiSignUpResponce, IApiSignInRequest, IApiUser} from './types';

/**
 * Запрос регистрации
 * @param data  Информация о пользователе
 */
export async function apiSignUp(data: IApiSignUpRequest): Promise<boolean> {
	const response = await ax.post<IApiSignUpResponce>('/auth/signup', data, {responseType: 'text'});

	return Boolean(response.data.id) || Promise.reject(response);
}

/**
 * Запрос авторизации
 * @param data  Логин и пароль
 */
export async function apiSignIn(data: IApiSignInRequest): Promise<boolean> {
	const response = await ax.post<string>('/auth/signin', data, {responseType: 'text'});

	return response.data === 'OK' || Promise.reject(response);
}

/**
 * Запрос выхода из системы
 */
export async function apiSignOut(): Promise<boolean> {
	const response = await ax.post<string>('/auth/logout', null, {responseType: 'text'});

	return response.data === 'OK' || Promise.reject(response);
}

/**
 * Запрос информации о пользователе
 * @return  Информация о пользователе
 */
export async function apiGetUserInfo(): Promise<IApiUser> {
	const response = await ax.get<IApiUser>('/auth/user');

	return response.data;
}
