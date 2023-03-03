import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import AddCourse from './pages/AddCourse'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import PasswordRestorePage from './pages/PasswordRestorePage'
import PersonalAccountPage from './pages/PersonalAccountPage'
import RegisterAsTeacherPage from './pages/RegisterAsTeacherPage'
import RegisterPage from './pages/RegisterPage'

export const MainRoutes = () => {
	const routes = [
		{
			path: 'account/register',
			element: <RegisterPage />,
			id: 1,
		},
		{
			path: 'account/register/mentor',
			element: <RegisterAsTeacherPage />,
			id: 2,
		},
		{
			path: 'account/login',
			element: <LoginPage />,
			id: 3,
		},
		{
			path: 'personal',
			element: <PersonalAccountPage />,
			id: 4,
		},
		{
			path: 'restore_password',
			element: <PasswordRestorePage />,
			id: 5,
		},
		{
			path: 'courses/add',
			element: <AddCourse />,
			id: 6,
		},
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
