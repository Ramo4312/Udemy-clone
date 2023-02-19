import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'

export const MainRoutes = () => {
	interface IRoutes {
		path: string
		element: Function
		id: number
	}
	const routes = [{ path: 'basket', element: '', id: 1 }]

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{routes.map(item => (
					<Route path={item.path} element={item.element} key={item.id} />
				))}
			</Route>
		</Routes>
	)
}
