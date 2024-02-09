/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
			light: {
          ...require("daisyui/src/theming/themes")["emerald"],
          secondary : "oklch(0.6245 0.278 3.83636)",
        },
			},
			{
			dark: {
          ...require("daisyui/src/theming/themes")["dim"],
          secondary : "oklch(0.6245 0.278 3.83636)",
        },
			},
		], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		// darkTheme: "dim", // name of one of the included themes for dark mode
		logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
	  }
}
