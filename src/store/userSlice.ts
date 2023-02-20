import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMentor, IUser } from '../types/types'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: <object | null>null,
		isFetching: <boolean>false,
		error: <boolean>false,
	},
	reducers: {
		// addToTrashStart: state => {
		// 	state.isFetching = true
		// 	state.error = false
		// },
		// addToTrashSuccess: (state, action: PayloadAction<any>) => {
		// 	state.isFetching = false
		// 	state.completeTodos.splice(
		// 		state.completeTodos.findIndex(item => item.id === action.payload.id),
		// 		1
		// 	)
		// 	state.trash.push(action.payload)
		// 	state.error = false
		// },
		// addToTrashFailure: state => {
		// 	state.isFetching = false
		// 	state.error = true
		// },

		loginStart: state => {
			state.isFetching = true
			state.error = false
		},
		loginSuccess: (state, action: PayloadAction<IUser>) => {
			state.isFetching = false
			state.currentUser = action.payload
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

		logoutSuccess: state => {
			state.currentUser = null
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
} = userSlice.actions

export default userSlice.reducer
