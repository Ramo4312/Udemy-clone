import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { login } from '../store/apiCalls'

import { motion } from 'framer-motion'

const LoginPage = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const navigate = useNavigate()

	const dispatch = useAppDispatch()
	const { error } = useAppSelector(state => state.user)

	function handleLogin() {
		if (!email.trim() || !password.trim()) {
			return
		}

		let user = {
			email,
			password,
		}

		let formData = new FormData()
		formData.append('email', email)
		formData.append('password', password)

		login(dispatch, user, navigate)
	}

	return (
		<div className='flex justify-center items-center py-32'>
			<form
				onSubmit={e => e.preventDefault()}
				className='flex flex-col gap-y-4 '
			>
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='text'
					className='auth-inputs'
					placeholder='email'
				/>
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type='text'
					className='auth-inputs'
					placeholder='password'
				/>
				<div className='flex flex-col mt-7 gap-y-4 items-center'>
					<motion.button
						initial={{ translateY: 0 }}
						whileHover={{ translateY: '-2px' }}
						transition={{ duration: 0.2 }}
						onClick={handleLogin}
						className='text-white font-bold py-2 bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200 rounded-xl px-20'
					>
						Вход
					</motion.button>
					<hr className='w-full border-0 h-[1.5px] bg-slate-500' />
					<p className=''>
						У вас еще нет учетной записи?{' '}
						<span
							className='text-[#5624d0] font-bold cursor-pointer'
							onClick={() => navigate('/register')}
						>
							Регистрация
						</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export default LoginPage
