/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-color': '#C9CBCE',
        'button-color': '#284b63',
        'lighter-background-color': '#d9d9d9',
      },
      boxShadow: {
        'default': '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}