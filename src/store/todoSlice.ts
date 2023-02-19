import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'user',
	initialState: {
		isFetching: false,
		error: false,
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
	},
})

export const {} = userSlice.actions

export default userSlice.reducer
