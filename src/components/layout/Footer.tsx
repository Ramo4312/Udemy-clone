import { useLocation } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='pt-1 mx-auto mb-10 w-[91.1%]' id='contacts'>
			{/* <hr className='mb-7 w-full h-[1.9px] border-0 bg-black ' />
			<ul className='flex flex-row justify-between items-center 2sm:flex-col gap-y-3 mb-6'>
				<li
					className='addres'
					onClick={() => window.open('https://goo.gl/maps/dTLGAoKdMdUg2fSS7')}
				>
					Боконбаева 183
				</li>
				<hr className=' w-4 h-px border-0 2sm:rotate-0 2sm:w-1/3 2sm:h-[2px] bg-black rotate-90' />
				<li>
					Отзывы и предложения: <span>+996 551 63 11 11</span>
				</li>
				<hr className=' w-4 h-px border-0 2sm:rotate-0 2sm:w-1/3 2sm:h-[2px] bg-black rotate-90' />
				<li>
					доставка: <span>+996 551 63 11 11</span>
				</li>
			</ul>
			<div className='social-btn-block flex gap-x-8 2sm:w-[40%] 2sm:gap-0 2sm:justify-between justify-center mx-auto'>
				{social?.map(item => (
					<img
						key={item.id}
						onClick={() => window.open(item.navigate)}
						alt='icons'
					/>
				))}
			</div> */}
		</footer>
	)
}

export default Footer
