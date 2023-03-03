import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './navbar/Navbar'

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout
