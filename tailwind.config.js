/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/games/*.{js,ts,jsx,tsx,mdx}",
		"./pages/games/race.tsx",
		"./components/*.{js,ts,jsx,tsx,mdx}",
		"./app/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
				burtons: "burtons",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				burtons: "#F5F5F5",
				"burtons-dark": "#1A1A1A",
				"burtons-light": "#FFFFFF",
				"burtons-red": "#FF0000",
				"burtons-blue": "#0000FF",
				"burtons-green": "#00FF00",
				"burtons-yellow": "#FFFF00",
				"burtons-orange": "#FFA500",
				"burtons-purple": "#800080",
				"burtons-pink": "#FFC0CB",
				"burtons-brown": "#A52A2A",
				"burtons-gray": "#808080",
				"burtons-cyan": "#00FFFF",
				"burtons-magenta": "#FF00FF",
				med: "#c0c0c0 ",
				high: "#000000",
				low: "#fefefa",
			},
		},
	},
	plugins: [],
};
