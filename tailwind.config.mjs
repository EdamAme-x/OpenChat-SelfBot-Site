/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		function({ addUtilities }) {
			const newUtilities = {
			  ".text-shadow": {
				textShadow: "0px 2px 3px darkgrey"
			  },
			  ".text-shadow-md": {
				textShadow: "0px 3px 3px darkgrey"
			  },
			  ".text-shadow-lg": {
				textShadow: "0px 5px 3px darkgrey"
			  },
			  ".text-shadow-xl": {
				textShadow: "0px 7px 3px darkgrey"
			  },
			  ".text-shadow-2xl": {
				textShadow: "0px 10px 3px darkgrey"
			  },
			  ".text-shadow-none": {
				textShadow: "none"
			  }
			};
	  
			addUtilities(newUtilities);
		  }
	],
}
