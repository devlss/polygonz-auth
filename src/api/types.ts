export interface Id {
	id: number;
}

export interface IApiUserInfo {
	first_name: string;
	second_name: string;
	display_name?: string;
	login: string;
	email: string;
	phone: string;
	avatar?: string;
}
export interface IApiUser extends Id, IApiUserInfo {}

/**
 * Запрос регистрации
 */
export interface IApiSignUpRequest extends IApiUserInfo {
	password: string;
}

/**
 * Ответ на запрос регистрации
 */
export interface IApiSignUpResponce {
	id: number;
}

/**
 * Запрос аутентификации
 */
export interface IApiSignInRequest {
	login: string;
	password: string;
}

/**
 * Ответ сервера с ошибкой
 */
export interface IApiBadRequestError {
	reason: string;
	body?: {
		description: string;
	};
	status?: number;
}
