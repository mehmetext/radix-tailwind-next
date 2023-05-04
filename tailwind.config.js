/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				slideDownAccordion: {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUpAccordion: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				slideDownAccordion: "slideDownAccordion 150ms",
				slideUpAccordion: "slideUpAccordion 150ms",
			},
		},
	},
	plugins: [],
};
