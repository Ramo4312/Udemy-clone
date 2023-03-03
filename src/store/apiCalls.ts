import axios from 'axios'
import { NavigateFunction } from 'react-router-dom'
import {
	IEmail,
	IMentor,
	INewPassword,
	INewUser,
	IUser,
	TCourse,
} from '../types/types'
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

import {
	getStart,
	getSuccess,
	getFailed,
	getOneStart,
	getOneSuccess,
	getOneFailed,
	addStart,
	addSuccess,
	addFailed,
	getCategoriesStart,
	getCategoriesSuccess,
	getCategoriesFailed,
} from './courseSlice'

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
			// password: user.password,
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
		dispatch(loginSuccess({ ...res.data, email: user.email }))
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

export const changePassword = async (
	newPassword: INewPassword,
	token: string
) => {
	try {
		let Authorization = `Bearer ${token}`

		const config = {
			headers: {
				Authorization,
			},
		}

		let res = await publicReq.post(
			`account/change_password/`,
			newPassword,
			config
		)

		console.log(res.data, res.status)
	} catch (err) {
		console.log(err)
	}
}

export const getCourses = async (dispatch: Function) => {
	dispatch(getStart())
	try {
		const res = await publicReq(`courses/`)
		dispatch(getSuccess(res.data.results))
		console.log('get', res.status)
	} catch (err) {
		dispatch(getFailed())
		console.log(err)
	}
}

export const getOneCourses = async (dispatch: Function, id: number) => {
	dispatch(getOneStart())
	try {
		const res = await publicReq(`courses/${id}/`)
		dispatch(getOneSuccess(res.data))
		console.log(res.data)
	} catch (err) {
		dispatch(getOneFailed())
		console.log(err)
	}
}

export const addCourse = async (dispatch: Function, course: TCourse) => {
	dispatch(addStart())
	try {
		const res = await publicReq.post(`courses/`, course)
		dispatch(addSuccess(res.data))
		console.log(res)
	} catch (err) {
		dispatch(addFailed())
		console.log(err)
	}
}

export const getCategories = async (dispatch: Function) => {
	dispatch(getCategoriesStart())
	try {
		const res = await publicReq(`categories/`)
		dispatch(getCategoriesSuccess(res.data.results))
		console.log('get', res.status)
	} catch (err) {
		dispatch(getCategoriesFailed())
		console.log(err)
	}
}
