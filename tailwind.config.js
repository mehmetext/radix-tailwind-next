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
				alertDialogShowOverlay: {
					from: { opacity: 0 },
					to: { opaciyy: 1 },
				},
				alertDialogShowContent: {
					from: { opacity: 0 },
					to: { opaciyy: 1 },
				},
			},
			animation: {
				slideDownAccordion: "slideDownAccordion 150ms",
				slideUpAccordion: "slideUpAccordion 150ms",
				alertDialogShowOverlay: "alertDialogShowOverlay 150ms",
				alertDialogShowContent: "alertDialogShowContent 150ms",
			},
		},
	},
	plugins: [],
};
