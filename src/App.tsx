import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { MainRoutes } from './routes'
import { getCategories, getCourses } from './store/apiCalls'

function App() {
	const { courses } = useAppSelector(state => state.courses)
	const dispatch = useAppDispatch()

	useEffect(() => {
		getCategories(dispatch)
	}, [])

	useEffect(() => {
		getCourses(dispatch)
	}, [])

	return (
		<div>
			<MainRoutes />
		</div>
	)
}

export default App
