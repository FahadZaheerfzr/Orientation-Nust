/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'pale-pink': '#F9D8D7',
				'ultra-red': '#F26E83',
				'tyrian-purple': '#720240',
				'prussian-blue': '#112E49',
				'lapis-lazuli': '#12629E',
			},
			fontFamily: {
				montserrat: ['Montserrat'],
				mont: ['Montserrat-Light'],
				vogue: ['Vogue'],
				brittany: ['Brittany-Signature'],
				poppins: ['Poppins', 'Noto Sans Regular', 'Helvetica Neue', 'sans-serif', 'Arial'],
				heading: ['Lato-Bold', 'sans-serif', 'Arial'],
				subHeading: ['Lato-Regular', 'sans-serif', 'Arial'],
				body: ['Lato-Light', 'sans-serif', 'Arial'],
				jacklyn: ['The-Jacklyn', 'sans-serif', 'Arial'],
				aspectRange: ['Aspect-Range', 'sans-serif', 'Arial'],
			},
			keyframes: {
				expand: {
					'0%': {
						transform: 'scale(1.1)',
					},
					'50%': {
						transform: 'scale(0.98)',
					},
					'100%': {
						transform: 'scale(1.1)',
					},
				},
			},
			animation: {
				expand: 'expand 1s ease-in-out infinite',
			},
			screens: {
				xs: '400px',
			},
		},
	},
	plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography'), require('@tailwindcss/aspect-ratio')],
};
