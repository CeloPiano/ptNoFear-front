/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'button-color': '#284b63',
        'background-color': '#c9cbce',
      },
      boxShadow: {
        'default': '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
