import axios from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { IEmail, IMentor, INewUser, IUser } from '../types/types'
import {
	loginStart,
	loginSuccess,
	loginFailure,
	registerStart,
	registerSuccess,
	registerFailure,
	logoutSuccess,
	registerAsMentorStart,
	registerAsMentorSuccess,
	registerAsMentorFailure,
	forgotPasswordStart,
	forgotPasswordSuccess,
	forgotPasswordFailure,
	restorePasswordStart,
	restorePasswordSuccess,
	restorePasswordFailure,
} from './userSlice'

const BASE_URL = 'http://34.172.10.128/api/v1/'

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

export const register = async (
	dispatch: Function,
	user: object,
	navigate: NavigateFunction
) => {
	dispatch(registerStart())
	try {
		const res = await publicReq.post(`account/register/`, user)
		console.log(res.status, res.data)
		navigate('/login')
		dispatch(registerSuccess())
	} catch (err) {
		dispatch(registerFailure())
	}
}

export const registerAsMentor = async (
	dispatch: Function,
	user: IMentor,
	navigate: NavigateFunction
) => {
	dispatch(registerAsMentorStart())
	try {
		const res = await publicReq.post(`account/register/mentor/`, user)
		console.log(res.status, res.data)
		let userInfo = {
			...res.data,
			email: user.email,
			password: user.password,
		}
		navigate('/personal')
		dispatch(loginSuccess(userInfo))
		dispatch(registerAsMentorSuccess(user))
	} catch (err) {
		console.log(err)
		dispatch(registerAsMentorFailure())
	}
}

export const login = async (
	dispatch: Function,
	user: IUser,
	navigate: NavigateFunction
) => {
	dispatch(loginStart())
	try {
		const res = await publicReq.post(`account/login/`, user)
		dispatch(loginSuccess({ ...res.data, ...user }))
		navigate('/')
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const forgotPassword = async (dispatch: Function, email: IEmail) => {
	dispatch(forgotPasswordStart())
	try {
		const res = await publicReq.post(`account/forgot_password/`, email)
		console.log(res.status, res.data)
		dispatch(forgotPasswordSuccess(email.email))
	} catch (err) {
		dispatch(forgotPasswordFailure())
	}
}

export const restorePassword = async (
	dispatch: Function,
	user: INewUser,
	navigate: NavigateFunction
) => {
	dispatch(restorePasswordStart())
	try {
		const res = await publicReq.post(`account/forgot_password_confirm/`, user)
		console.log(res.status, res.data)
		navigate('/login')
		dispatch(restorePasswordSuccess(user))
		// let newUser = {
		// 	email: user.email,
		// 	password: user.password,
		// }
		// login(dispatch, newUser, navigate)
	} catch (err) {
		dispatch(restorePasswordFailure())
	}
}

export const logout = (dispatch: Function) => {
	dispatch(logoutSuccess())
}
