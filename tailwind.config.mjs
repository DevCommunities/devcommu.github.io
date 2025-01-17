/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			lineSansTH: ['LINESeedSansTH', ...defaultTheme.fontFamily.sans],
			lineSansTH_XB: ['LINESeedSansTHXB', ...defaultTheme.fontFamily.sans],
		  },
		extend: {
			screens: {
				'xs': '350px',
			},
			colors: {
				'primary': '#E57192',
				'secondary': '#F4F4F4',
				'cutoff': '#000000',
				'accent-primary': '#E57192',
				'accent-secondary': '#F6F6F6',
				'accent-cutoff': '#334155',
			},
		},
	},
	plugins: [],
}
