import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
	userId: null,
	login: null,
	email: null,
	isAuth: false,
}

const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
	type: SET_USER_DATA,
	payload: { userId, email, login, isAuth },
})
export const getAuthUserData = () => dispatch => {
	return authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let { id, email, login } = response.data.data
			dispatch(setAuthUserData(id, email, login, true))
		}
	})
}

export const login = (email, password, rememberMe) => dispatch => {
	console.log('Данные для логина:', { email, password, rememberMe })
	authAPI.login(email, password, rememberMe).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData())
		} else {
			let messages =
				response.data.messages.length > 0
					? response.data.messages[0]
					: 'Some ERROR'
			dispatch(stopSubmit('login', { _error: messages }))
		}
	})
}

export const logout = () => dispatch => {
	authAPI.logout().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setAuthUserData(null, null, null, false))
		}
	})
}

export default AuthReducer
