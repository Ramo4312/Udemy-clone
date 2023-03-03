import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { ICategories } from '../types/types'

import {
	languages,
	aud,
	brl,
	eur,
	rub,
	usd,
	currencies,
} from '../arrays/arrays'

import bulletedList from '../images/bulleted-list-icon.svg'
import numberedList from '../images/numbered-list-icon.svg'
import bold from '../images/bold-icon.svg'
import italic from '../images/italic-icon.svg'

import {
	Development,
	Business,
	Finances,
	It_and_software,
	Office_software,
	Personal_growth,
	Marketing,
	Live_style,
	Photo_video,
	Health,
	Music,
	Academical_disciplines,
	Design,
	Rub,
	Eur,
	Aud,
	Brl,
	Usd,
} from '../components/selects/Selects'
import { addCourse } from '../store/apiCalls'

const AddCourse = () => {
	const [title, setTitle] = useState<string>('')
	const [sub_title, setSub_title] = useState<string>('')
	const [description, setDescription] = useState<string>('')
	const [sub_category, setSub_category] = useState<string>('')
	const [price, setPrice] = useState<string>('')
	const [category, setCategory] = useState<string>('')
	const [level, setLevel] = useState<string>('')
	const [currency, setCurrency] = useState<string>('RUB')
	const [lang, setLang] = useState<string>('Русский')

	const [empty, setEmpty] = useState<boolean>(true)
	const [error, setError] = useState<boolean>(false)
	const [section, setSection] = useState<string>('Целевая страница курса')

	const { categories } = useAppSelector(state => state.courses)
	const dispatch = useAppDispatch()

	const category_selects = [
		{
			id: 1,
			title: 'Разработка',
			component: (
				<Development
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 2,
			title: 'Business',
			component: (
				<Business
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 3,
			title: 'Финансы и бухгалтерский учет',
			component: (
				<Finances
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 4,
			title: 'IT и ПО',
			component: (
				<It_and_software
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 5,
			title: 'Офисное программное обеспечение',
			component: (
				<Office_software
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 6,
			title: 'Личностный рост',
			component: (
				<Personal_growth
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 7,
			title: 'Маркетинг',
			component: (
				<Marketing
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 8,
			title: 'Стиль жизни',
			component: (
				<Live_style
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 9,
			title: 'Фотография и видео',
			component: (
				<Photo_video
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 10,
			title: 'Здоровье и фитнес',
			component: (
				<Health sub_category={sub_category} setSub_category={setSub_category} />
			),
		},
		{
			id: 11,
			title: 'Музыка',
			component: (
				<Music sub_category={sub_category} setSub_category={setSub_category} />
			),
		},
		{
			id: 12,
			title: 'Учебные и академические дисциплины',
			component: (
				<Academical_disciplines
					sub_category={sub_category}
					setSub_category={setSub_category}
				/>
			),
		},
		{
			id: 13,
			title: 'Дизайн',
			component: (
				<Design sub_category={sub_category} setSub_category={setSub_category} />
			),
		},
	]

	console.log({
		title,
		sub_title,
		description,
		sub_category,
		price,
		category,
		level,
		currency,
		lang,
	})

	const currency_selects = [
		{
			id: 1,
			title: 'RUB',
			component: <Rub setPrice={setPrice} />,
		},
		{
			id: 2,
			title: 'EUR',
			component: <Eur setPrice={setPrice} />,
		},
		{
			id: 3,
			title: 'AUD',
			component: <Aud setPrice={setPrice} />,
		},
		{
			id: 4,
			title: 'BRL',
			component: <Brl setPrice={setPrice} />,
		},
		{
			id: 5,
			title: 'USD',
			component: <Usd setPrice={setPrice} />,
		},
	]

	const sections = [
		{ id: 1, title: 'Целевая страница курса' },
		{ id: 2, title: 'Учебный план' },
		{ id: 3, title: 'Ценообразование' },
	]

	function handleSave() {
		if (empty) {
			setError(true)
			setTimeout(() => {
				setError(false)
			}, 2000)
			return
		}
	}

	useEffect(() => {
		if (
			title.trim() &&
			sub_title.trim() &&
			description.trim() &&
			sub_category.trim() &&
			price.trim() &&
			category.trim() &&
			level.trim() &&
			currency.trim() &&
			lang.trim()
		) {
			setEmpty(false)
		} else {
			setEmpty(true)
		}
	}, [
		title,
		sub_title,
		description,
		sub_category,
		price,
		category,
		level,
		currency,
		lang,
	])

	return (
		<div className='pt-48 flex flex-col items-center'>
			<div className='flex gap-x-16 pb-20 pl-64'>
				<div className='fixed left-44'>
					<ul className=' flex flex-col gap-y-3'>
						<li className='text-lg font-semibold mb-2'>Разделы</li>
						{sections?.map(item => (
							<li
								onClick={() => setSection(item.title)}
								className={`${
									section == item.title
										? 'bg-black pl-4 ml-2 text-white font-medium'
										: ''
								} pr-2 py-1 duration-200 rounded-lg cursor-pointer`}
								key={item.id}
							>
								{item.title}
							</li>
						))}
					</ul>
					<button
						onClick={handleSave}
						className={`${
							empty
								? 'bg-gray-500 hover:bg-gray-700'
								: 'bg-[#a435f0] hover:bg-[#6b0bab]'
						} px-11 py-2 my-6 rounded-lg font-semibold text-white duration-150 hover:duration-150`}
					>
						Сохранить
					</button>
					<p
						className={`${
							error ? 'opacity-100' : 'opacity-0'
						} absolute text-center duration-150 bg-gray-300 rounded-lg border border-gray-500`}
					>
						Сначала заполните все нужные поля!
					</p>
				</div>
				<div
					className={`${
						section !== 'Целевая страница курса'
							? 'opacity-0 -z-2 hidden'
							: 'opacity-100 z-0 flex'
					} flex-col p-6 shadow-[0_4px_20px_rgb(0,0,0,0.3)] rounded-xl gap-y-6`}
				>
					<h3 className='text-3xl font-medium font-["Times_New_Roman"] text-center'>
						Целевая страница курса
					</h3>
					<div className='flex flex-col gap-y-3'>
						<h4 className='text-lg font-bold'>Заголовок курса</h4>
						<div className='flex border-2 border-black rounded-lg px-3 py-2 w-[55vw] justify-between'>
							<input
								type='text'
								id='title'
								placeholder='Вставьте заголовок курса'
								className='bg-transparent w-11/12 px-2 text-lg'
								maxLength={60}
								value={title}
								onChange={e => setTitle(e.target.value)}
							/>
							<label
								htmlFor='title'
								className='text-gray-600 text-lg bg-transparent'
							>
								{60 - title.length}
							</label>
						</div>
						<h6 className='text-sm text-gray-600'>
							Название курса должно быть привлекательным, информативным и
							оптимизированным для поиска
						</h6>
					</div>

					<div className='flex flex-col gap-y-3'>
						<h4 className='text-lg font-bold'>Подзаголовок курса</h4>
						<div className='flex border-2 border-black rounded-lg px-3 py-2 w-[55vw] justify-between'>
							<input
								type='text'
								id='title'
								className='bg-transparent w-11/12 px-2 text-lg'
								placeholder='Вставьте подзаголовок курса'
								maxLength={120}
								value={sub_title}
								onChange={e => setSub_title(e.target.value)}
							/>
							<label
								htmlFor='title'
								className='text-gray-600 text-lg bg-transparent'
							>
								{120 - sub_title.length}
							</label>
						</div>
						<h6 className='text-sm text-gray-600'>
							Используйте 1 или 2 ключевых слова, и упомяните 3–4 наиболее
							важные сферы, затрагиваемые в вашем курсе.
						</h6>
					</div>
					<div className='flex flex-col gap-y-3'>
						<h4 className='text-lg font-bold'>Описание курса</h4>
						<div className='flex flex-col border-2 border-black rounded-lg py-2 w-[55vw] justify-between'>
							<div className='flex gap-x-6 px-3 shadow-[0_1.5px_0_black]'>
								<img
									src={bold}
									alt=''
									className='w-5 my-2 shadow-[0_2px_0_black] pb-2'
								/>
								<img
									src={italic}
									alt=''
									className='w-5 my-2 shadow-[0_2px_0_black] pb-2'
								/>
								<img
									src={bulletedList}
									alt=''
									className='w-6 my-2 shadow-[0_2px_0_black] pb-2'
								/>
								<img
									src={numberedList}
									alt=''
									className='w-6 my-2 shadow-[0_2px_0_black] pb-2'
								/>
							</div>
							<div className='flex justify-center px-3 py-2'>
								<textarea
									className='peer block min-h-[50px] w-full rounded border-0 bg-transparent py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none'
									rows={3}
									placeholder='Вставьте описание курса'
									value={description}
									onChange={e => setDescription(e.target.value)}
								></textarea>
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-y-3'>
						<h4 className='text-lg font-bold'>Основная информация</h4>
						<div className='flex items-start justify-between'>
							<select
								required
								title='Язык'
								className='select'
								onChange={e => {
									languages?.filter((item: string) => {
										if (item == e.target.value) {
											setLang(item)
										}
									})
								}}
								defaultValue={lang}
							>
								{languages?.map((item: string) => (
									<option className='' key={item} value={item}>
										{item}
									</option>
								))}
							</select>
							<select
								required
								title='Уровень'
								className='select'
								onChange={e => setLevel(e.target.value)}
								defaultValue={level}
							>
								<option value=''>-- Выберите уровень --</option>
								<option value='Начальный уровень'>Начальный уровень</option>
								<option value='Средний уровень'>Средний уровень</option>
								<option value='Профессиональный уровень'>
									Профессиональный уровень
								</option>
								<option value='Все уровни'>Все уровни</option>
							</select>
							<div className='flex flex-col gap-y-5'>
								<>
									<select
										required
										title='Категорий'
										className='select'
										onChange={e => {
											setCategory(e.target.value)
											setSub_category('')
										}}
										defaultValue={category}
									>
										<option value=''>-- Выберите категорию --</option>
										{categories?.map((item: ICategories) => (
											<option key={item.id} value={item.title}>
												{item.title}
											</option>
										))}
									</select>
									{category_selects?.map(item => (
										<div className='inline-block' key={item.id}>
											{item.title == category ? item.component : null}
										</div>
									))}
								</>
							</div>
						</div>
					</div>
				</div>

				<div
					className={`${
						section !== 'Ценообразование'
							? 'opacity-0 -z-2 hidden'
							: 'opacity-100 z-0 flex'
					} flex-col p-6 shadow-[0_4px_20px_rgb(0,0,0,0.3)] rounded-xl gap-y-6 w-[55vw]`}
				>
					<h3 className='text-3xl font-medium font-["Times_New_Roman"] text-center'>
						Расценки
					</h3>
					<div className=''>
						<div className=''>
							<h4 className='mb-6'>Ценовая категория курса</h4>
							<p className=''>
								Выберите ценовую категорию для своего курса ниже и нажмите
								"Сохранить". Объявленная цена, которая будет отображаться для
								студентов в другой валюте, рассчитывается согласно{' '}
								<a
									style={{ textDecoration: 'underline' }}
									className='text-blue-500'
									href='https://s.udemycdn.com/support/Udemy+Price+Tier+Matrix-V3.pdf'
								>
									матрице ценообразования.
								</a>
							</p>
							<p className='my-3'>
								Если вы планируете предлагать свой курс бесплатно, совокупная
								длительность видеолекций в курсе не должна превышать 2 часов
							</p>
							<div className='flex gap-x-4 items-center'>
								<>
									<select
										className='select w-32'
										defaultValue={currency}
										onChange={e => setCurrency(e.target.value)}
									>
										{currencies?.map((item: string) => (
											<option key={item} value={item}>
												{item}
											</option>
										))}
									</select>

									{currency_selects?.map(item => (
										<div className='inline-block' key={item.id}>
											{item.title == currency ? item.component : null}
										</div>
									))}
									<button
										className={`${
											price == ''
												? 'bg-gray-500 hover:bg-gray-700'
												: 'bg-[#a435f0] hover:bg-[#6b0bab]'
										} px-11 py-2 my-6 rounded-lg font-semibold text-white duration-150 hover:duration-150`}
									>
										Сохранить
									</button>
								</>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AddCourse
