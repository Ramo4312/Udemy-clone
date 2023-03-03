import { FC } from 'react'

import {
	development,
	business,
	finances,
	it_and_software,
	office_software,
	personal_growth,
	marketing,
	live_style,
	photo_video,
	health,
	music,
	academical_disciplines,
	design,
	rub,
	usd,
	eur,
	aud,
	brl,
} from '../../arrays/arrays'

interface SetState {
	sub_category: string
	setSub_category: Function
}

interface Currency {
	setPrice: Function
}

export const Development: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{development?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Business: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{business?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Finances: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{finances?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const It_and_software: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{it_and_software?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Office_software: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{office_software?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Personal_growth: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{personal_growth?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Marketing: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{marketing?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Live_style: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{live_style?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Photo_video: FC<SetState> = ({ setSub_category }) => {
	return (
		<select
			data-te-select-init
			className='select'
			onChange={e => setSub_category(e.target.value)}
		>
			<option value=''>-- Выберите подкатегорию --</option>
			{photo_video?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Health: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{health?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Music: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{music?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Academical_disciplines: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{academical_disciplines?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Design: FC<SetState> = ({ setSub_category }) => {
	return (
		<select className='select' onChange={e => setSub_category(e.target.value)}>
			<option value=''>-- Выберите подкатегорию --</option>
			{design?.map((item: string) => (
				<option key={item} value={item}>
					{item}
				</option>
			))}
		</select>
	)
}

export const Rub: FC<Currency> = ({ setPrice }) => {
	return (
		<select className='select' onChange={e => setPrice(e.target.value)}>
			<>
				<option value=''>Выбрать</option>
				<option value='free'>Бесплатно</option>
				{rub?.map((item: string) => (
					<option className='py-3' key={item} value={item}>
						{item}
					</option>
				))}
			</>
		</select>
	)
}

export const Eur: FC<Currency> = ({ setPrice }) => {
	return (
		<select className='select' onChange={e => setPrice(e.target.value)}>
			<>
				<option value=''>Выбрать</option>
				<option value='free'>Бесплатно</option>
				{eur?.map((item: string) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</>
		</select>
	)
}

export const Aud: FC<Currency> = ({ setPrice }) => {
	return (
		<select className='select' onChange={e => setPrice(e.target.value)}>
			<>
				<option value=''>Выбрать</option>
				<option value='free'>Бесплатно</option>
				{aud?.map((item: string) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</>
		</select>
	)
}

export const Brl: FC<Currency> = ({ setPrice }) => {
	return (
		<select className='select' onChange={e => setPrice(e.target.value)}>
			<>
				<option value=''>Выбрать</option>
				<option value='free'>Бесплатно</option>
				{brl?.map((item: string) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</>
		</select>
	)
}

export const Usd: FC<Currency> = ({ setPrice }) => {
	return (
		<select className='select' onChange={e => setPrice(e.target.value)}>
			<>
				<option value=''>Выбрать</option>
				<option value='free'>Бесплатно</option>
				{usd?.map((item: string) => (
					<option key={item} value={item}>
						{item}
					</option>
				))}
			</>
		</select>
	)
}
