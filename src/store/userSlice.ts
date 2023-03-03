import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMentor, IPayload, IUser } from '../types/types'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: <any>null,
		tokens: <any>null,
		isEmail: <string>'',
		isFetching: <boolean>false,
		error: <boolean>false,
	},
	reducers: {
		loginStart: state => {
			state.isFetching = true
			state.error = false
		},
		loginSuccess: (state, action: PayloadAction<IPayload>) => {
			state.isFetching = false
			state.tokens = {
				access: action.payload.access,
				refresh: action.payload.refresh,
			}
			state.currentUser = {
				email: action.payload.email,
				password: action.payload.password,
			}
			state.error = false
		},
		loginFailure: state => {
			state.isFetching = false
			state.error = true
		},

		registerStart: state => {
			state.isFetching = true
			state.error = false
		},
		registerSuccess: state => {
			state.isFetching = false
			state.error = false
		},
		registerFailure: state => {
			state.isFetching = false
			state.error = true
		},

		registerAsMentorStart: state => {
			state.isFetching = true
			state.error = false
		},
		registerAsMentorSuccess: (state, action: PayloadAction<any>) => {
			state.isFetching = false
			state.currentUser = action.payload
			state.error = false
		},
		registerAsMentorFailure: state => {
			state.isFetching = false
			state.error = true
		},

		forgotPasswordStart: state => {
			state.isFetching = true
			state.error = false
		},
		forgotPasswordSuccess: (state, action: PayloadAction<string>) => {
			state.isFetching = false
			state.isEmail = action.payload
			state.error = false
		},
		forgotPasswordFailure: state => {
			state.isFetching = false
			state.error = true
		},

		restorePasswordStart: state => {
			state.isFetching = true
			state.error = false
		},
		restorePasswordSuccess: (state, action: PayloadAction<IUser>) => {
			state.isFetching = false
			state.isEmail = ''
			// state.currentUser = action.payload
			state.error = false
		},
		restorePasswordFailure: state => {
			state.isFetching = false
			state.error = true
		},

		logoutSuccess: state => {
			state.currentUser = null
			state.tokens = null
		},
	},
})

export const {
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
} = userSlice.actions

export default userSlice.reducer
