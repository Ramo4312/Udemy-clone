import axios from 'axios'
import { NavigateFunction } from 'react-router-dom'
import { IMentor, IUser } from '../types/types'
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
			first_name: user.first_name,
			last_name: user.last_name,
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
	user: object,
	navigate: NavigateFunction
) => {
	dispatch(loginStart())
	try {
		const res = await publicReq.post(`account/login/`, user)
		let userInfo = {
			...res.data,
			...user,
		}
		console.log(res.status)
		dispatch(loginSuccess(userInfo))
		navigate('/')
	} catch (err) {
		dispatch(loginFailure())
	}
}

export const logout = (dispatch: Function) => {
	dispatch(logoutSuccess())
}
