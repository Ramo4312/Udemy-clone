import React, { useState } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

import logo from '../../../images/logo-udemy.svg'

interface IList {
	id: number
	title: string
	to: string
}

export const list = [
	// { id: 1, title: 'Главная', to: '/' },
	{ id: 2, title: 'Все курсы', to: '/all_courses' },
	{ id: 4, title: 'Меню', to: '/menu' },
	{ id: 5, title: 'Забронировать стол', to: '/reserve' },
	{ id: 6, title: 'Контакты', to: '/contacts' },
]

const Navbar = () => {
	const navigate = useNavigate()

	const { pathname } = useLocation()

	return (
		<>
			<nav className='w-full bg-[rgb(255,255,255,03)] backdrop-blur-[10px] shadow-lg h-20 flex justify-between px-16 items-center'>
				<img src={logo} alt='' width={120} className='cursor-pointer' />
				<ul className='flex flex-row gap-x-5'>
					{list.map((item: IList) => (
						<motion.li
							initial={{ translateY: 0 }}
							whileHover={{ translateY: '-2px' }}
							transition={{ duration: 0.3 }}
							className='text-xl font-semibold cursor-pointer'
							style={
								pathname == item.to
									? { boxShadow: '0 3px 0 #A435F0' }
									: { boxShadow: 'none' }
							}
							key={item.id}
							// onClick={() => navigate(item.to)}
						>
							{item.title}
						</motion.li>
					))}
				</ul>
				<div className='flex gap-x-6'>
					<motion.button
						initial={{ translateY: 0 }}
						whileHover={{ translateY: '-2px' }}
						transition={{ duration: 0.2 }}
						className='text-black font-bold px-3 py-2 border-2 border-black rounded-xl'
					>
						Войти
					</motion.button>
					<motion.button
						initial={{ translateY: 0 }}
						whileHover={{ translateY: '-2px' }}
						transition={{ duration: 0.2 }}
						className='text-white font-bold px-3 py-2 bg-black rounded-xl'
					>
						Регистрация
					</motion.button>
					<motion.button
						initial={{ translateY: 0 }}
						whileHover={{ translateY: '-2px' }}
						transition={{ duration: 0.2 }}
						className='text-black font-bold px-3 py-2 border-2 border-black  rounded-xl'
					>
						RU
					</motion.button>
				</div>
			</nav>
		</>
	)
}

export default Navbar
