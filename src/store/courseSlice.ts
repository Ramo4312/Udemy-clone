import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategories, TCourse } from '../types/types'

const courseSlice = createSlice({
	name: 'courses',
	initialState: {
		courses: <any>[],
		oneCourse: <any>null,
		categories: <any>[],
		isFetching: <boolean>false,
		error: <boolean>false,
	},
	reducers: {
		getStart: state => {
			state.isFetching = true
			state.error = false
		},
		getSuccess: (state, action: PayloadAction<TCourse[]>) => {
			state.isFetching = false
			state.courses = action.payload
			state.error = false
		},
		getFailed: state => {
			state.isFetching = false
			state.error = true
		},

		getOneStart: state => {
			state.isFetching = true
			state.error = false
		},
		getOneSuccess: (state, action: PayloadAction<TCourse>) => {
			state.isFetching = false
			state.oneCourse = action.payload
			state.error = false
		},
		getOneFailed: state => {
			state.isFetching = false
			state.error = true
		},

		addStart: state => {
			state.isFetching = true
			state.error = false
		},
		addSuccess: (state, action: PayloadAction<TCourse>) => {
			state.isFetching = false
			state.courses.push(action.payload)
			state.error = false
		},
		addFailed: state => {
			state.isFetching = false
			state.error = true
		},

		getCategoriesStart: state => {
			state.isFetching = true
			state.error = false
		},
		getCategoriesSuccess: (state, action: PayloadAction<ICategories[]>) => {
			state.isFetching = false
			state.categories = action.payload
			state.error = false
		},
		getCategoriesFailed: state => {
			state.isFetching = false
			state.error = true
		},
	},
})

export const {
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
} = courseSlice.actions

export default courseSlice.reducer
