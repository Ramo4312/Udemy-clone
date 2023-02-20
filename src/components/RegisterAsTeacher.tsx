import { FC, useState } from 'react'

import closeBtn from '../images/close-btn.svg'
import backBtn from '../images/back-btn.svg'
import checkedRadio from '../images/checked-radio.svg'
import radio from '../images/radio.svg'
import { useAppDispatch } from '../hooks/hooks'
import { registerAsMentor } from '../store/apiCalls'
import { useNavigate } from 'react-router-dom'

interface Modal {
	modal: boolean
	setModal: Function
}

const RegisterAsTeacher: FC<Modal> = ({ modal, setModal }) => {
	const [first_name, setFirst_name] = useState<string>('')
	const [last_name, setLast_name] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [password2, setPassword2] = useState<string>('')
	const [type, setType] = useState<string>('')
	const [experience, setExperience] = useState<string>('')
	const [audience, setAudience] = useState<string>('')

	const [part, setPart] = useState<string>('inputs')

	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	function modalSwitch() {
		if (
			!first_name.trim() ||
			!last_name.trim() ||
			!email.trim() ||
			!password.trim() ||
			!password2.trim()
		) {
			alert('Заполните все поля')
			return
		}

		setPart('type')
	}

	const types = [
		{
			id: 1,
			title: 'Лично, частным образом',
		},
		{
			id: 2,
			title: 'Лично, профессионально',
		},
		{
			id: 3,
			title: 'Онлайн',
		},
		{
			id: 4,
			title: 'Другое',
		},
	]

	const experiences = [
		{
			id: 1,
			title: 'Я новичок',
		},
		{
			id: 2,
			title: 'У меня есть определенные знания',
		},
		{
			id: 3,
			title: 'У меня большой опыт',
		},
		{
			id: 4,
			title: 'У меня уже есть готовые видео для загрузки',
		},
	]

	const audiences = [
		{
			id: 1,
			title: 'В настоящий момент нет',
		},
		{
			id: 2,
			title: 'У меня маленькая аудитория',
		},
		{
			id: 3,
			title: 'У меня достаточная аудитория',
		},
	]

	const modals = [
		{
			id: 1,
			title: 'inputs',
			form: (
				<form
					action=''
					onSubmit={e => e.preventDefault()}
					onClick={e => e.stopPropagation()}
					className='flex flex-col items-center gap-y-5 pt-24 pb-10 bg-white rounded-xl w-[380px] relative'
				>
					<img
						src={closeBtn}
						alt=''
						className='w-8 absolute right-6 top-5'
						onClick={() => setModal(false)}
					/>
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
					<input
						value={password2}
						onChange={e => setPassword2(e.target.value)}
						type='text'
						className='auth-inputs'
						placeholder='password2'
					/>
					<button
						className='text-white font-bold py-2 bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200 rounded-xl px-20'
						onClick={modalSwitch}
					>
						Дальше
					</button>
				</form>
			),
		},
		{
			id: 2,
			title: 'type',
			form: (
				<form
					onSubmit={e => e.preventDefault()}
					onClick={e => e.stopPropagation()}
					className='flex flex-col items-center gap-y-5 pt-24 pb-10 bg-white rounded-xl w-[800px] relative px-8'
				>
					<div className='flex justify-between px-6 h-8 w-full absolute top-5'>
						<img src={backBtn} alt='' onClick={() => setPart('inputs')} />
						<img src={closeBtn} alt='' onClick={() => setModal(false)} />
					</div>
					<div>
						<div className=''>
							<h3 className='text-5xl font-bold font-["Times_New_Roman"]'>
								Поделитесь своими знаниями
							</h3>
							<p className='w-11/12 text-lg my-9'>
								Курсы Udemy — это обучение на основе видеоматериалов, которые
								помогают студентам приобрести практические навыки. Вне
								зависимости от того, какой опыт преподавания у вас есть, мы
								поможем вам организовать ваши материалы в виде онлайн-курса,
								чтобы студентам было интересно и полезно их изучать.
							</p>
						</div>
						<div className='flex justify-between items-end'>
							<div className='flex flex-col items-start gap-y-4'>
								<h3 className='text-xl font-bold'>
									В каком формате вы преподавали раньше?
								</h3>
								{types?.map(item => (
									<div
										className=' border hover:bg-slate-100 hover:duration-75 duration-75 border-black flex items-center justify-start p-4 gap-x-4 rounded-xl w-80 cursor-pointer'
										key={item.id}
										onClick={() => setType(item.title)}
									>
										<img
											src={item.title == type ? checkedRadio : radio}
											alt='radio'
											className='w-6'
										/>

										<p className=''>{item.title}</p>
									</div>
								))}
							</div>
							<div className='pr-10'>
								<button
									className={`
                  ${
										type == ''
											? 'bg-zinc-600'
											: 'bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200'
									} text-white font-bold py-2 rounded-xl px-20`}
									onClick={() => setPart('experience')}
								>
									Дальше
								</button>
							</div>
						</div>
					</div>
				</form>
			),
		},
		{
			id: 3,
			title: 'experience',
			form: (
				<form
					onSubmit={e => e.preventDefault()}
					onClick={e => e.stopPropagation()}
					className='flex flex-col items-center gap-y-5 pt-24 pb-10 bg-white rounded-xl w-[800px] relative px-8'
				>
					<div className='flex justify-between px-6 h-8 w-full absolute top-5'>
						<img src={backBtn} alt='' onClick={() => setPart('type')} />
						<img src={closeBtn} alt='' onClick={() => setModal(false)} />
					</div>
					<div>
						<div className=''>
							<h3 className='text-5xl font-bold font-["Times_New_Roman"]'>
								Создайте курс
							</h3>
							<p className='w-11/12 text-lg my-9'>
								Курсы Udemy — это обучение на основе видеоматериалов, которые
								помогают студентам приобрести практические навыки. Вне
								зависимости от того, какой опыт преподавания у вас есть, мы
								поможем вам организовать ваши материалы в виде онлайн-курса,
								чтобы студентам было интересно и полезно их изучать.
							</p>
						</div>
						<div className='flex justify-between items-end'>
							<div className='flex flex-col items-start gap-y-4'>
								<h3 className='text-xl font-bold'>
									Насколько хорошо вы разбираетесь в видеозаписи?
								</h3>
								{experiences?.map(item => (
									<div
										className=' border hover:bg-slate-100 hover:duration-75 duration-75 border-black flex items-center justify-start p-4 gap-x-4 rounded-xl w-[420px] cursor-pointer'
										key={item.id}
										onClick={() => setExperience(item.title)}
									>
										<img
											src={item.title == experience ? checkedRadio : radio}
											alt='radio'
											className='w-6'
										/>

										<p className=''>{item.title}</p>
									</div>
								))}
							</div>
							<div className='pr-10'>
								<button
									className={`
                  ${
										experience == ''
											? 'bg-zinc-600'
											: 'bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200'
									} text-white font-bold py-2 rounded-xl px-20`}
									onClick={() => setPart('audience')}
								>
									Дальше
								</button>
							</div>
						</div>
					</div>
				</form>
			),
		},
		{
			id: 4,
			title: 'audience',
			form: (
				<form
					onSubmit={e => e.preventDefault()}
					onClick={e => e.stopPropagation()}
					className='flex flex-col items-center gap-y-5 pt-24 pb-10 bg-white rounded-xl w-[800px] relative px-8'
				>
					<div className='flex justify-between px-6 h-8 w-full absolute top-5'>
						<img src={backBtn} alt='' onClick={() => setPart('experience')} />
						<img src={closeBtn} alt='' onClick={() => setModal(false)} />
					</div>
					<div>
						<div className=''>
							<h3 className='text-5xl font-bold font-["Times_New_Roman"]'>
								Расширяйте свою аудиторию
							</h3>
							<p className='w-11/12 text-lg my-9'>
								Когда ваш курс опубликован, вы можете начать расширять свою
								аудиторию студентов, использовать возможности продвижения на
								торговой площадке Udemy и рекламировать свои курсы
								самостоятельно. Всё вместе это поможет заинтересованным
								студентам найти ваш курс.
							</p>
						</div>
						<div className='flex justify-between items-end'>
							<div className='flex flex-col items-start gap-y-4'>
								<h3 className='text-xl font-bold'>
									У вас есть аудитория для вашего курса?
								</h3>
								{audiences?.map(item => (
									<div
										className=' border hover:bg-slate-100 hover:duration-75 duration-75 border-black flex items-center justify-start p-4 gap-x-4 rounded-xl w-[420px] cursor-pointer'
										key={item.id}
										onClick={() => setAudience(item.title)}
									>
										<img
											src={item.title == audience ? checkedRadio : radio}
											alt='radio'
											className='w-6'
										/>

										<p className=''>{item.title}</p>
									</div>
								))}
							</div>
							<div className='pr-10'>
								<button
									className={`
                  ${
										audience == ''
											? 'bg-zinc-600'
											: 'bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200'
									} text-white font-bold py-2 rounded-xl px-12`}
									onClick={handleRegister}
								>
									Зарегистрироваться
								</button>
							</div>
						</div>
					</div>
				</form>
			),
		},
	]

	function handleRegister() {
		let user = {
			first_name,
			last_name,
			email,
			password,
			password2,
			type,
			experience,
			audience,
		}

		registerAsMentor(dispatch, user, navigate)
	}

	return (
		<div
			style={
				modal
					? { opacity: 1, zIndex: 20, transitionDuration: '0.3s' }
					: { opacity: 0, zIndex: -1, transitionDuration: '0.2s' }
			}
			className='fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-[rgb(0,0,0,0.4)] backdrop-blur-[10px] flex items-center justify-center'
			onClick={() => setModal(false)}
		>
			{modals?.map(item => (
				<>{item.title == part ? item.form : null}</>
			))}

			{/* <form
				action=''
				onSubmit={e => e.preventDefault()}
				onClick={e => e.stopPropagation()}
				className='flex flex-col items-center gap-y-5 pt-24 pb-10 bg-white rounded-xl w-[380px] relative'
			>
				<img
					src={closeBtn}
					alt=''
					className='w-8 absolute right-6 top-5'
					onClick={() => setModal(false)}
				/>
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
				<input
					value={password2}
					onChange={e => setPassword2(e.target.value)}
					type='text'
					className='auth-inputs'
					placeholder='password2'
				/>
				<button
					className='text-white font-bold py-2 bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200 rounded-xl px-20'
					onClick={modalSwitch}
				>
					Дальше
				</button>
			</form> */}

			{/* <form
				onSubmit={e => e.preventDefault()}
				onClick={e => e.stopPropagation()}
				className='flex flex-col items-center gap-y-5 pt-24 pb-10 bg-white rounded-xl w-[800px] relative px-8'
			>
				<div>
					<div className=''>
						<h3 className='text-5xl font-bold font-["Times_New_Roman"]'>
							Поделитесь своими знаниями
						</h3>
						<p className='w-11/12 text-lg my-9'>
							Курсы Udemy — это обучение на основе видеоматериалов, которые
							помогают студентам приобрести практические навыки. Вне зависимости
							от того, какой опыт преподавания у вас есть, мы поможем вам
							организовать ваши материалы в виде онлайн-курса, чтобы студентам
							было интересно и полезно их изучать.
						</p>
					</div>
					<div className='flex justify-between items-end'>
						<div className='flex flex-col items-start gap-y-4'>
							{inputs?.map(item => (
								<div
									className=' border hover:bg-slate-100 hover:duration-75 duration-75 border-black flex items-center justify-start p-4 gap-x-4 rounded-xl w-80 cursor-pointer'
									key={item.id}
									onClick={() => setType(item.title)}
								>
									<img
										src={item.title == type ? checkedRadio : radio}
										alt='radio'
										className='w-6'
									/>

									<p className=''>{item.title}</p>
								</div>
							))}
						</div>
						<div className='pr-10'>
							<button
								className={`
                  ${
										type == ''
											? 'bg-zinc-600'
											: 'bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200'
									} text-white font-bold py-2 rounded-xl px-20`}
							>
								Дальше
							</button>
						</div>
					</div>
				</div>
			</form> */}

			{/* <form
				onSubmit={e => e.preventDefault()}
				onClick={e => e.stopPropagation()}
				className='flex flex-col items-center gap-y-5 pt-24 pb-10 bg-white rounded-xl w-[800px] relative px-8'
			>
				<div>
					<div className=''>
						<h3 className='text-5xl font-bold font-["Times_New_Roman"]'>
							Расширяйте свою аудиторию
						</h3>
						<p className='w-11/12 text-lg my-9'>
							Когда ваш курс опубликован, вы можете начать расширять свою
							аудиторию студентов, использовать возможности продвижения на
							торговой площадке Udemy и рекламировать свои курсы самостоятельно.
							Всё вместе это поможет заинтересованным студентам найти ваш курс.
						</p>
					</div>
					<div className='flex justify-between items-end'>
						<div className='flex flex-col items-start gap-y-4'>
							<h3 className='text-xl font-bold'>
								Насколько хорошо вы разбираетесь в видеозаписи? 
							</h3>
							{audiences?.map(item => (
								<div
									className=' border hover:bg-slate-100 hover:duration-75 duration-75 border-black flex items-center justify-start p-4 gap-x-4 rounded-xl w-[420px] cursor-pointer'
									key={item.id}
									onClick={() => setAudience(item.title)}
								>
									<img
										src={item.title == audience ? checkedRadio : radio}
										alt='radio'
										className='w-6'
									/>

									<p className=''>{item.title}</p>
								</div>
							))}
						</div>
						<div className='pr-10'>
							<button
								className={`
                  ${
										audience == ''
											? 'bg-zinc-600'
											: 'bg-[#a435f0] hover:bg-[#6b0bab] hover:duration-200 duration-200'
									} text-white font-bold py-2 rounded-xl px-20`}
								// onClick={() => setPart('audience')}
							>
								Дальше
							</button>
						</div>
					</div>
				</div>
			</form> */}
		</div>
	)
}

export default RegisterAsTeacher
