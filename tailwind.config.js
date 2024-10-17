/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./resources/**/*.{svelte,html,js,ts}", 
    "./node_modules/flowbite/**/*.js",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

