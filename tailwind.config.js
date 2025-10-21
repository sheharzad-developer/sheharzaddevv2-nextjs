const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light colors
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',

				// Extended v3 color
				gray: colors.neutral,
			},
			fontFamily: {
				'general-regular': ['GeneralSans-Variable', 'sans-serif'],
				'general-medium': ['GeneralSans-Variable', 'sans-serif'],
				'general-semibold': ['GeneralSans-Variable', 'sans-serif'],
				'general-bold': ['GeneralSans-Variable', 'sans-serif'],
				'urdu': ['Noto Nastaliq Urdu', 'serif'],
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '1.5rem',
					md: '2rem',
					lg: '3rem',
					xl: '4rem',
					'2xl': '5rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
