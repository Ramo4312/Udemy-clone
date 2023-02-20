import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import PersonalAccountPage from './pages/PersonalAccountPage'
import RegisterAsTeacherPage from './pages/RegisterAsTeacherPage'
import RegisterPage from './pages/RegisterPage'

export const MainRoutes = () => {
	const routes = [
		{ path: 'register', element: <RegisterPage />, id: 1 },
		{ path: 'register/mentor', element: <RegisterAsTeacherPage />, id: 2 },
		{ path: 'login', element: <LoginPage />, id: 3 },
		{ path: 'personal', element: <PersonalAccountPage />, id: 4 },
	]

	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<MainPage />} />
				{routes.map(item => (
					<Route path={item.path} element={item.element} key={item.id} />
				))}
			</Route>
		</Routes>
	)
}
