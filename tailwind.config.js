/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			zIndex: {
				1: 1,
				'-1': '-1',
				2: 2,
				'-2': '-2',
			},
		},
	},
	plugins: [],
}
