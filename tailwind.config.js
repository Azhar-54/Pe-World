/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				airbnb: 'Airbnb Cereal App',
			},
			keyframes: {
				scale: {
					'0%, 100%': { transform: 'scale(100%)' },
					'50%': { transform: 'scale(125%)' },
				},
			},
			animation: {
				scale: 'scale 500ms ease-in-out 1',
			},
		},
	},
	plugins: [],
};
