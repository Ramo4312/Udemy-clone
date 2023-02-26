import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { login } from '../store/apiCalls'

import { motion } from 'framer-motion'
import { IUser } from '../types/types'
import Arrays from '../components/arrays/arrays'

const LoginPage = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [hide, setHide] = useState<boolean>(true)

	const navigate = useNavigate()

	const dispatch = useAppDispatch()
	const { error } = useAppSelector(state => state.user)

	function handleLogin() {
		if (!email.trim() || !password.trim()) {
			alert('Заполните все поля')
			return
		}

		let user: IUser = {
			email,
			password,
		}

		let formData = new FormData()
		formData.append('email', email)
		formData.append('password', password)

		login(dispatch, user, navigate)
	}

	return (
		<div className='flex justify-center items-center py-32 mt-20'>
			<motion.form
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5 }}
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
				{/* <Arrays /> */}
				<input
					value={password}
					onChange={e => setPassword(e.target.value)}
					type={hide ? 'password' : 'text'}
					className='auth-inputs'
					placeholder='password'
				/>
				<p
					className='text-blue-600 text-right pr-3 cursor-pointer'
					onClick={() => setHide(!hide)}
				>
					Показать пароль
				</p>
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
					<p>
						Забыли пароль?{' '}
						<span
							className='text-[#5624d0] font-bold cursor-pointer'
							onClick={() => navigate('/restore_password')}
						>
							Восстановить
						</span>
					</p>
					<hr className='w-full border-0 h-[1.5px] bg-slate-500' />
					<p className=''>
						У вас еще нет учетной записи?{' '}
						<span
							className='text-[#5624d0] font-bold cursor-pointer'
							onClick={() => navigate('/account/register')}
						>
							Регистрация
						</span>
					</p>
				</div>
			</motion.form>
		</div>
	)
}

export default LoginPage
