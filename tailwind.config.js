/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/NavBar.js",
    "./src/App.js",
    "./src/Header.js",
    "./src/PropertyList.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

