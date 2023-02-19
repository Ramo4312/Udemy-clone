import axios from 'axios'

const BASE_URL = 'http://34.172.10.128/api/v1/'

export const publicReq = axios.create({
	baseURL: BASE_URL,
})

export const getTodos = async (dispatch: Function) => {
	dispatch()
	try {
		// const res = await publicReq(`todos/`)
		dispatch()
	} catch (err) {
		dispatch()
	}
}
