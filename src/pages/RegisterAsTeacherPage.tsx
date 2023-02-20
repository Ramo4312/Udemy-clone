import React, { useState } from 'react'
import RegisterAsTeacher from '../components/RegisterAsTeacher'

const RegisterAsTeacherPage = () => {
	const [card, setCard] = useState<string>('Создайте учебный план')
	const [modal, setModal] = useState<boolean>(false)

	const cards = [
		{
			title: 'Создайте учебный план',
			id: 1,
			card: (
				<div className='info-card'>
					<div className='how-it-works--text--13tNL'>
						<p className='ud-text-md teach-page__margin-center'>
							Положитесь на свой интерес и знания. Выберите подходящую тему с
							помощью инструмента аналитики торговой площадки.
						</p>
						<p className='ud-text-md teach-page__margin-center'>
							Ваш стиль преподавания&nbsp;— то, что вы в него
							вкладываете,&nbsp;— зависит только от вас.
						</p>
						<h3 className='ud-heading-lg how-it-works--help-text--2g-ce'>
							Нужна помощь?
						</h3>
						<p className='ud-text-md teach-page__margin-center'>
							Мы предоставляем множество ресурсов для создания вашего первого
							курса. Наши страницы с панелью преподавателя и учебным планом
							курса помогут вам организовать процесс.
						</p>
					</div>
					<img
						alt=''
						width='480'
						height='480'
						src='https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg'
						srcSet='https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg 1x, https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg 2x'
					/>
				</div>
			),
		},
		{
			title: 'Запишите видео',
			id: 2,
			card: (
				<div className='info-card'>
					<div className='how-it-works--text--13tNL'>
						<p className='ud-text-md teach-page__margin-center'>
							Используйте простые устройства&nbsp;― смартфон или цифровую
							зеркальную камеру, а также хороший микрофон&nbsp;― этого
							достаточно.
						</p>
						<p className='ud-text-md teach-page__margin-center'>
							Если вы не любите быть в кадре, просто ведите запись экрана. В
							обоих случаях рекомендуемая длина видео для платных курсов
							составляет от двух часов.
						</p>
						<h3 className='ud-heading-lg how-it-works--help-text--2g-ce'>
							Нужна помощь?
						</h3>
						<p
							className='ud-text-md ud-text-with-links teach-page__margin-center'
							data-purpose='safely-set-inner-html:how-it-works:support'
						>
							Наша команда поддержки всегда готова вам помочь и предоставить
							отзыв о вашем тестовом видео.
						</p>
					</div>
					<img
						alt=''
						width='480'
						height='480'
						src='https://s.udemycdn.com/teaching/record-your-video-v3.jpg'
					/>
				</div>
			),
		},
		{
			title: 'Запустите свой курс',
			id: 3,
			card: (
				<div className='info-card'>
					<div className='how-it-works--text--13tNL'>
						<p className='ud-text-md teach-page__margin-center'>
							Получите свои первые оценки и отзывы, поделившись курсом в
							социальных сетях и в своей профессиональной среде.
						</p>
						<p className='ud-text-md teach-page__margin-center'>
							Ваш курс будет также опубликован на нашей торговой площадке, где
							за каждую регистрацию на платный курс вы будете получать оплату.
						</p>
						<h3 className='ud-heading-lg how-it-works--help-text--2g-ce'>
							Нужна помощь?
						</h3>
						<p className='ud-text-md teach-page__margin-center'>
							Наш инструмент для создания купонов позволит вам предлагать
							студентам поощрения за регистрацию, а участие в наших глобальных
							акциях поможет привлечь ещё больше студентов. Ещё больше
							возможностей будет доступно для курсов, выбранных для подписки
							Udemy Business.
						</p>
					</div>
					<img
						alt=''
						width='480'
						height='480'
						src='https://s.udemycdn.com/teaching/launch-your-course-v3.jpg'
					/>
				</div>
			),
		},
	]

	const navButtons = [
		{
			title: 'Создайте учебный план',
			id: 1,
			button: (
				<button
					type='button'
					id='tabs--3-tab-0'
					aria-selected='true'
					role='tab'
					className='text-center'
					tabIndex={0}
				>
					<span className='text-2xl font-bold'>Создайте учебный план</span>
				</button>
			),
		},
		{
			title: 'Запишите видео',
			id: 2,
			button: (
				<button
					type='button'
					id='tabs--3-tab-1'
					aria-selected='false'
					role='tab'
					className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs--nav-button--3VgVI'
					tabIndex={-1}
				>
					<span className='text-2xl font-bold'>Запишите видео</span>
				</button>
			),
		},
		{
			title: 'Запустите свой курс',
			id: 3,
			button: (
				<button
					type='button'
					id='tabs--3-tab-2'
					aria-selected='false'
					role='tab'
					className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-nav-button tabs--nav-button--3VgVI'
					tabIndex={-1}
				>
					<span className='text-2xl font-bold'>Запустите свой курс</span>
				</button>
			),
		},
	]

	return (
		<>
			<RegisterAsTeacher modal={modal} setModal={setModal} />
			<div className='mt-[80px]'>
				<div
					className='ud-app-loader ud-component--teach-page--app teach-page ud-app-loaded'
					data-module-id='teach-page'
				>
					<div className='relative flex items-center justify-between'>
						<img
							alt=''
							width='1800'
							height='600'
							src='https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg'
							srcSet='https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg 1x, https://s.udemycdn.com/teaching/billboard-desktop-2x-v4.jpg 2x'
						/>
						<div className='absolute pl-40'>
							<h1 className='text-5xl font-bold'>Учите у нас</h1>
							<p className='text-lg w-80 my-5'>
								Станьте преподавателем и меняйте жизни к лучшему&nbsp;— включая
								свою
							</p>
							<button
								onClick={() => setModal(true)}
								type='button'
								className='bg-black px-16 py-3 text-white font-bold rounded-xl'
							>
								<span>Начните действовать</span>
							</button>
						</div>
					</div>
					<div className='flex flex-col items-center px-28 mb-12'>
						<h2 className='text-5xl font-bold text-center w-[600px] font-["Times_New_Roman"] my-20'>
							Для этого есть множество причин
						</h2>
						<div className='why-udemy--value-props--31Fzn'>
							<div className='flex justify-between'>
								<div className='flex flex-col items-center'>
									<div className=''>
										<img
											alt=''
											width='100'
											height='100'
											src='https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg'
											srcSet='https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg 2x'
										/>
									</div>
									<div className='font-bold text-[19px]'>
										Учите, как вам нравится
									</div>
									<div className='text-center px-12 font-normal'>
										Сами выбирайте курсы для публикации так, как вам захочется,
										а также сохраняйте полный контроль над своими материалами.
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<div className='value-props--graphic--MCrlz'>
										<img
											alt=''
											width='100'
											height='100'
											src='https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg'
											srcSet='https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg 2x'
										/>
									</div>
									<div className='font-bold text-[19px]'>
										Вдохновляйте студентов
									</div>
									<div className='text-center px-[55px] font-normal'>
										Делитесь знаниями и помогайте своим студентам находить новые
										увлечения, получать новые навыки и добиваться успехов в
										карьере.
									</div>
								</div>
								<div className='flex flex-col items-center'>
									<div className='value-props--graphic--MCrlz'>
										<img
											alt=''
											width='100'
											height='100'
											src='https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg'
											srcSet='https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg 1x, https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg 2x'
										/>
									</div>
									<div className='font-bold text-[19px]'>
										Получайте вознаграждения
									</div>
									<div className='text-center px-12 font-normal'>
										Расширяйте профессиональные связи, расширяйте знания и
										зарабатывайте деньги за каждую регистрацию на платный курс.
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='bg-[#5627D0] py-12'>
						<div className='flex px-20 justify-around'>
							<div>
								<div className='indicators'>57M</div>
								<p className='text-white'>Студенты</p>
							</div>
							<div>
								<div className='indicators'>75+</div>
								<p className='text-white'>Языки</p>
							</div>
							<div>
								<div className='indicators'>773M</div>
								<p className='text-white'>Регистрации</p>
							</div>
							<div>
								<div className='indicators'>180+</div>
								<p className='text-white'>Страны</p>
							</div>
							<div>
								<div className='indicators'>13&nbsp;400+</div>
								<p className='text-white'>Корпоративные клиенты</p>
							</div>
						</div>
					</div>
					<div className='text-center'>
						<h2 className='text-5xl font-bold text-center font-["Times_New_Roman"] my-20'>
							С чего начать?
						</h2>
						<div className='mb-12'>
							<div
								className='flex justify-center gap-x-6 mb-12 '
								role='tablist'
								data-purpose='tab-nav-buttons'
							>
								{navButtons?.map(item => (
									<div
										key={item.id}
										className={
											item.title == card ? 'shadow-[0_2px_0_black]' : ''
										}
										onClick={() => setCard(item.title)}
									>
										{item.button}
									</div>
								))}
							</div>
							{cards?.map(item => (
								<div
									className=''
									key={item.id}
									style={
										item.title == card
											? { display: 'block' }
											: { display: 'none' }
									}
								>
									{item.card}
								</div>
							))}
							{/* <div
							id='tabs--3-content-0'
							role='tabpanel'
							className='ud-tab-content tabs--tab-content--MLK3S tabs--active--2zzvm'
							tabIndex={0}
							data-purpose='tab-container'
							aria-labelledby='tabs--3-tab-0'
						>
							<div className='how-it-works--tab-content--yjVyA'>
								<div className='how-it-works--text--13tNL'>
									<p className='ud-text-md teach-page__margin-center'>
										Положитесь на свой интерес и знания. Выберите подходящую
										тему с помощью инструмента аналитики торговой площадки.
									</p>
									<p className='ud-text-md teach-page__margin-center'>
										Ваш стиль преподавания&nbsp;— то, что вы в него
										вкладываете,&nbsp;— зависит только от вас.
									</p>
									<h3 className='ud-heading-lg how-it-works--help-text--2g-ce'>
										Нужна помощь?
									</h3>
									<p className='ud-text-md teach-page__margin-center'>
										Мы предоставляем множество ресурсов для создания вашего
										первого курса. Наши страницы с панелью преподавателя и
										учебным планом курса помогут вам организовать процесс.
									</p>
								</div>
								<img
									alt=''
									width='480'
									height='480'
									src='https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg'
									srcSet='https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg 1x, https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg 2x'
								/>
							</div>
						</div>
						<div
							id='tabs--3-content-1'
							role='tabpanel'
							className='ud-tab-content tabs--tab-content--MLK3S'
							tabIndex={-1}
							data-purpose='tab-container'
							aria-labelledby='tabs--3-tab-1'
						>
							<div className='how-it-works--tab-content--yjVyA'>
								<div className='how-it-works--text--13tNL'>
									<p className='ud-text-md teach-page__margin-center'>
										Используйте простые устройства&nbsp;― смартфон или цифровую
										зеркальную камеру, а также хороший микрофон&nbsp;― этого
										достаточно.
									</p>
									<p className='ud-text-md teach-page__margin-center'>
										Если вы не любите быть в кадре, просто ведите запись экрана.
										В обоих случаях рекомендуемая длина видео для платных курсов
										составляет от двух часов.
									</p>
									<h3 className='ud-heading-lg how-it-works--help-text--2g-ce'>
										Нужна помощь?
									</h3>
									<p
										className='ud-text-md ud-text-with-links teach-page__margin-center'
										data-purpose='safely-set-inner-html:how-it-works:support'
									>
										Наша команда поддержки всегда готова вам помочь и
										предоставить отзыв о вашем тестовом видео.
									</p>
								</div>
								<img
									alt=''
									width='480'
									height='480'
									src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"%3E%3C/svg%3E'
								/>
							</div>
						</div>
						<div
							id='tabs--3-content-2'
							role='tabpanel'
							className='ud-tab-content tabs--tab-content--MLK3S'
							tabIndex={-1}
							data-purpose='tab-container'
							aria-labelledby='tabs--3-tab-2'
						>
							<div className='how-it-works--tab-content--yjVyA'>
								<div className='how-it-works--text--13tNL'>
									<p className='ud-text-md teach-page__margin-center'>
										Получите свои первые оценки и отзывы, поделившись курсом в
										социальных сетях и в своей профессиональной среде.
									</p>
									<p className='ud-text-md teach-page__margin-center'>
										Ваш курс будет также опубликован на нашей торговой площадке,
										где за каждую регистрацию на платный курс вы будете получать
										оплату.
									</p>
									<h3 className='ud-heading-lg how-it-works--help-text--2g-ce'>
										Нужна помощь?
									</h3>
									<p className='ud-text-md teach-page__margin-center'>
										Наш инструмент для создания купонов позволит вам предлагать
										студентам поощрения за регистрацию, а участие в наших
										глобальных акциях поможет привлечь ещё больше студентов. Ещё
										больше возможностей будет доступно для курсов, выбранных для
										подписки Udemy Business.
									</p>
								</div>
								<img
									alt=''
									width='480'
									height='480'
									src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480"%3E%3C/svg%3E'
								/>
							</div>
						</div> */}
						</div>
					</div>
					{/* <div className='teach-page__pale-container from-instructors--container--3ebVm'>
					<div className='teach-page__margin-center from-instructors--carousel-container--1AOMr'>
						<div className='carousel--container--WjDNA'>
							<div
								className='from-instructors--carousel--pC9be carousel--scroll-port--G8nlm carousel--grid--21hQz carousel--scroll-lock--31wDL'
								data-purpose='scroll-port'
								id='scroll-port--4'
								aria-live='polite'
							>
								<div data-index='0' className='carousel--scroll-item--1cqyU'>
									<div className='from-instructors--inner-container--3A-hj'>
										<img
											alt=''
											width='400'
											height='400'
											className='teach-page__margin-center from-instructors--img--14ohb'
											src='https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg'
											srcSet='https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg 1x, https://s.udemycdn.com/teaching/instructors/en/frank-2x-v2.jpg 2x'
										/>
										<div className='from-instructors--text--3Iz7J'>
											<div>
												<p className='ud-text-lg from-instructors--quote--1tMSP'>
													«Каждое утро я просыпаюсь с чувством гордости, зная,
													что моя работа помогает людям из разных уголков
													планеты развивать профессиональные навыки и создавать
													невероятные вещи. И хотя работа преподавателя на
													полной ставке бывает тяжелой, она всё ещё позволяет
													вам работать когда, где и как того хотите вы сами».
												</p>
												<div className='ud-heading-md from-instructors--title--2wCfM'>
													Frank Kane
												</div>
												<div className='from-instructors--subtitle--3-zFG'>
													Обработка данных и сертификация ИТ
												</div>
											</div>
										</div>
									</div>
								</div>
								<div data-index='1' className='carousel--scroll-item--1cqyU'>
									<div className='from-instructors--inner-container--3A-hj'>
										<img
											alt=''
											width='400'
											height='400'
											className='teach-page__margin-center from-instructors--img--14ohb'
											src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3C/svg%3E'
										/>
										<div className='from-instructors--text--3Iz7J'>
											<div>
												<p className='ud-text-lg from-instructors--quote--1tMSP'>
													«Платформа Udemy изменила мою жизнь. Она позволяет мне
													заниматься любимым делом и работать преподавателем. Я
													обожаю наблюдать за успехами своих студентов. Всегда
													приятно услышать от студентов, что на моих курсах они
													узнают больше, чем во время профильного обучения по
													специальности».
												</p>
												<div className='ud-heading-md from-instructors--title--2wCfM'>
													Paulo Dichone
												</div>
												<div className='from-instructors--subtitle--3-zFG'>
													Разработчик (специализация&nbsp;― Android)
												</div>
											</div>
										</div>
									</div>
								</div>
								<div data-index='2' className='carousel--scroll-item--1cqyU'>
									<div className='from-instructors--inner-container--3A-hj'>
										<img
											alt=''
											width='400'
											height='400'
											className='teach-page__margin-center from-instructors--img--14ohb'
											src='data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3C/svg%3E'
										/>
										<div className='from-instructors--text--3Iz7J'>
											<div>
												<p className='ud-text-lg from-instructors--quote--1tMSP'>
													«Преподавание на платформе Udemy обеспечило меня двумя
													важными составляющими: возможностью привлечь столько
													учащихся, сколько мне никогда не удалось бы привлечь
													самостоятельно, а также стабильным источником
													дополнительного дохода».
												</p>
												<div className='ud-heading-md from-instructors--title--2wCfM'>
													Deborah Grayson Riege
												</div>
												<div className='from-instructors--subtitle--3-zFG'>
													Лидерство, навыки общения
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<button
								type='button'
								className='ud-btn ud-btn-large ud-btn-black-solid ud-btn-round ud-heading-md ud-btn-disabled ud-btn-icon ud-btn-icon-large ud-btn-icon-round ud-carousel-pager-button ud-carousel-pager-button-prev from-instructors--carousel-pager-button--3S7rp carousel--button--2RW_q carousel--prev-button--6BbhZ'
								data-pager-type='prev'
								tabIndex={-1}
							>
								<svg
									aria-label='Предыдущий'
									role='img'
									focusable='false'
									className='ud-icon ud-icon-large'
								>
									<use xlinkHref='#icon-previous'></use>
								</svg>
							</button>
							<button
								type='button'
								className='ud-btn ud-btn-large ud-btn-black-solid ud-btn-round ud-heading-md ud-btn-icon ud-btn-icon-large ud-btn-icon-round ud-carousel-pager-button ud-carousel-pager-button-next from-instructors--carousel-pager-button--3S7rp carousel--button--2RW_q carousel--next-button--1ZDLp'
								data-pager-type='next'
							>
								<svg
									aria-label='Далее'
									role='img'
									focusable='false'
									className='ud-icon ud-icon-large'
								>
									<use xlinkHref='#icon-next'></use>
								</svg>
							</button>
						</div>
					</div>
				</div> */}
					<div className='my-56'>
						<div className='flex justify-between items-center'>
							<img
								className='here-to-help--teach-image-1--1Wld5'
								alt=''
								width='480'
								height='480'
								src='https://s.udemycdn.com/teaching/support-1-v3.jpg'
							/>
							<div className='here-to-help--text--2wJxn'>
								<div>
									<h2 className='text-5xl font-bold text-center font-["Times_New_Roman"] my-20'>
										Вам не придётся справляться со всем в одиночку
									</h2>
									<p className='text-center text-[19px]'>
										Наша <strong>команда поддержки преподавателей</strong>{' '}
										всегда готова ответить на любые вопросы и проверить ваше
										тестовое видео, а наш <strong>Teaching Center</strong>{' '}
										предоставляет доступ к множеству ресурсов, которые могут
										облегчить вашу задачу. Также вы можете заручиться поддержкой
										опытных преподавателей в нашем{' '}
										<strong>интернет-сообществе</strong>.
									</p>
									{/* <a
									href='/udemy-teach-hub/teaching_on_udemy/?use-localization-prefix=1'
									target='_blank'
									rel='noopener noreferrer'
									className='ud-btn ud-btn-large ud-btn-ghost ud-heading-md ud-link-underline here-to-help--cta--1DDFs'
								>
									<span>
										Хотите узнать подробности, прежде чем приступить? Узнать
										больше.
									</span>
								</a> */}
								</div>
							</div>
							<img
								className='here-to-help--teach-image-1--1Wld5'
								alt=''
								width='480'
								height='480'
								src='https://s.udemycdn.com/teaching/support-2-v3.jpg'
							/>
						</div>
					</div>

					<div className='flex justify-center bg-stone-100 py-32'>
						<div className='flex flex-col items-center gap-y-10'>
							<h2 className='text-5xl font-bold text-center font-["Times_New_Roman"] w-[600px]'>
								Станьте преподавателем уже сегодня
							</h2>
							<p className='text-2xl font-normal w-[600px] text-center'>
								Присоединяйтесь к одной из крупнейших образовательных
								онлайн-платформ в мире.
							</p>
							<button
								type='button'
								className='ud-btn ud-btn-large ud-btn-primary ud-heading-md simple-cta--cta--1W4wB'
								data-purpose='bai-cta-footer'
							>
								<span
									onClick={() => setModal(true)}
									className='bg-black px-16 py-3 text-white font-bold rounded-xl'
								>
									Начните действовать
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RegisterAsTeacherPage
