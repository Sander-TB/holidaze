module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			"main-noir": "#2e3440",
			"lighter-noir": "#3b4252",
			"noir-t-90": "rgba(46,52,64, 0.9)",
			"noir-t-60": "rgba(46,52,64, 0.6)",
			"noir-t-40": "rgba(46,52,64, 0.4)",
			"main-ice": "#d8dee9",
			"lighter-ice": "#e5e9f0",
			"lightest-ice": "#eceff4",
			white: "#ffffff",
			"main-water": "#5e81ac",
			"lighter-water": "#709dd5",
			"alt-water": "#88c0d0",
			"main-fire": "#bf616a",
			"lighter-fire": "#e57883",
			"main-grass": "#a3be8c",
			"lighter-grass": "#bce29c",
			"main-sun": "#ebcb8b",
		},
		fontFamily: {
			heading: ["Roboto", "sans-serif"],
			body: ["Lato", "sans-serif"],
		},
		extend: {
			lineHeight: {
				"extra-loose": "2.5",
				"12": "3rem",
			},
			height: {
				card: "35rem",
				90: "90%",
			},

			width: {
				72: "72%",
				73: "73%",
				75: "75%",
				90: "90%",
			},

			margin: {
				18: "4.7rem",
			},

			keyframes: {
				slide: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0%)" },
				},
			},

			animation: {
				slide: "slide .7s ease-in-out",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
