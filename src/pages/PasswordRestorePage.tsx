import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { forgotPassword, login, restorePassword } from '../store/apiCalls'

import { motion } from 'framer-motion'

const PasswordRestorePAge = () => {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [password_confirm, setPassword_confirm] = useState<string>('')
	const [hide, setHide] = useState<boolean>(true)

	const { isEmail, error } = useAppSelector(state => state.user)

	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	function handleSend() {
		if (!email.trim()) {
			alert('Заполните поле')
			return
		}

		let mail = {
			email,
		}

		forgotPassword(dispatch, mail)
	}

	function handleRestore() {
		if (!email.trim() || !password.trim() || !password_confirm.trim()) {
			alert('Заполните поле')
			return
		}

		let user = {
			email,
			password,
			password_confirm,
		}

		let newUser = {
			email: email,
			password: password,
		}

		restorePassword(dispatch, user, navigate)

		// if (!error) {
		// 	login(dispatch, newUser, navigate)
		// }
	}

	return (
		<div className='pt-52 mt-20'>
			<motion.form
				initial={{ scale: 1.2, opacity: 0.3 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.6 }}
				onSubmit={e => e.preventDefault()}
				className='flex flex-col gap-y-4 w-[500px] mx-auto'
			>
				{isEmail == '' ? (
					<>
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='auth-inputs'
							placeholder='email'
						/>
						<button
							className='text-white font-bold py-2 bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200 rounded-xl px-20 w-4/5 mx-auto'
							onClick={handleSend}
						>
							Отправить
						</button>
					</>
				) : (
					<>
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							type='email'
							className='auth-inputs'
							placeholder='email'
						/>
						<input
							value={password}
							onChange={e => setPassword(e.target.value)}
							type={hide ? 'password' : 'text'}
							className='auth-inputs'
							placeholder='password'
						/>
						<input
							value={password_confirm}
							onChange={e => setPassword_confirm(e.target.value)}
							type={hide ? 'password' : 'text'}
							className='auth-inputs'
							placeholder='password confirm'
						/>
						<p
							className='text-blue-600 text-right pr-3 cursor-pointer'
							onClick={() => setHide(!hide)}
						>
							Показать пароль
						</p>
						<button
							onClick={handleRestore}
							className='text-white font-bold py-2 bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200 rounded-xl px-20 w-4/5 mx-auto'
						>
							Восстановить
						</button>
					</>
				)}
			</motion.form>
		</div>
	)
}

export default PasswordRestorePAge
