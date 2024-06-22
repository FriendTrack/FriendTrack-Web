import $api from '../../instance'

export interface PostLoginBody {
	login: string
	password: string
}

export interface PostRegistrationBody {
	email: string
	username: string
	login: string
	password: string
}

export interface PostLogoutBody {
	userId: string
}

export interface PostRefreshQueryParams {
	refreshToken: string
}

export interface PostAccessQueryParams {
	accessToken: string
}

export interface SuccessAuthResponse {
	userId: string
	accessToken: string
	refreshToken: string
}

export interface SuccessRefreshTokenResponse
	extends Omit<SuccessAuthResponse, 'userId'> {}

export const postLogin = (body: PostLoginBody) => {
	return $api.post<SuccessAuthResponse>('user/login', body)
}

export const postRegistration = (body: PostRegistrationBody) => {
	return $api.post<SuccessAuthResponse>('user/register', body)
}

export const postLogout = (body: PostLogoutBody) => {
	return $api.post('user/logout', body)
}

export const postRefresh = (queryParams: PostRefreshQueryParams) => {
	return $api.post<SuccessRefreshTokenResponse>(
		'user/refresh',
		{},
		{
			params: queryParams,
		}
	)
}

export const postAccess = (queryParams: PostAccessQueryParams) => {
	return $api.post<SuccessRefreshTokenResponse>(
		'user/access',
		{},
		{
			params: queryParams,
		}
	)
}
