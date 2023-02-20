import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/hooks'
import { register } from '../store/apiCalls'

import { motion } from 'framer-motion'

const RegisterPage = () => {
	const [first_name, setFirst_name] = useState<string>('')
	const [last_name, setLast_name] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [password2, setPassword2] = useState<string>('')

	const [passwordLevel, setPasswordLevel] = useState<string>('')
	function checkPasswordLevel(value: string) {
		setPassword(value)

		if (value == '') {
			setPasswordLevel('')
		}

		if (value !== '') {
			setPasswordLevel('ненадёжный')
		} else if (!/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
			setPasswordLevel('средний')
		} else {
			setPasswordLevel('надёжный')
		}
	}

	const navigate = useNavigate()

	const dispatch = useAppDispatch()

	function handleRegister() {
		if (
			!first_name.trim() ||
			!last_name.trim() ||
			!email.trim() ||
			!password.trim() ||
			!password2.trim()
		) {
			return
		}

		let formData = new FormData()
		formData.append('first_name', first_name)
		formData.append('last_name', last_name)
		formData.append('email', email)
		formData.append('password', password)
		formData.append('password2', password2)

		register(dispatch, formData, navigate)
	}

	return (
		<div className='flex justify-center items-center py-28'>
			<form
				onSubmit={e => e.preventDefault()}
				className='flex flex-col gap-y-4 '
			>
				<input
					value={first_name}
					onChange={e => setFirst_name(e.target.value)}
					type='text'
					className='auth-inputs'
					placeholder='first name'
				/>
				<input
					value={last_name}
					onChange={e => setLast_name(e.target.value)}
					type='text'
					className='auth-inputs'
					placeholder='last name'
				/>
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
				{/* {passwordLevel} */}
				<input
					value={password2}
					onChange={e => setPassword2(e.target.value)}
					type='text'
					className='auth-inputs'
					placeholder='password2'
				/>
				<div className='flex flex-col mt-7 gap-y-4 items-center'>
					<motion.button
						initial={{ translateY: 0 }}
						whileHover={{ translateY: '-2px' }}
						transition={{ duration: 0.2 }}
						onClick={handleRegister}
						className='text-white font-bold py-2 bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200 rounded-xl px-20'
					>
						Регистрация
					</motion.button>
					<hr className='w-full border-0 h-[1.5px] bg-slate-500' />

					<hr className='w-full border-0 h-[1.5px] bg-slate-500' />
					<p className=''>
						Уже есть учетная запись?{' '}
						<span
							className='text-[#5624d0] font-bold cursor-pointer'
							onClick={() => navigate('/login')}
						>
							Вход
						</span>
					</p>
				</div>
			</form>
		</div>
	)
}

export default RegisterPage
