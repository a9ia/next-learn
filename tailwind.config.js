/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  corePlugins: {
    preflight: false,
   },
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'blackBlue': 'rgb(17, 27, 54)'
    }),
    extend: {},
  },
  plugins: [],
}
