/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary': '#E57192',
				'secondary': '#F6F6F6',
				'cutoff': '#000000',
				'accent-primary': '#E57192',
				'accent-secondary': '#F6F6F6',
				'accent-cutoff': '#334155',
			},
		},
	},
	plugins: [],
}
