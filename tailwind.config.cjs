/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'lg': {'max': '1023px'},
      'md': {'max': '768px'},
      'sm': {'max': '480px'},
    },
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        'greyIsh': '#f1f4f8',
        'cardShadow': '#f7f8f9',
        'textColor': '#252b36',
      }
    },
  },
  plugins: [],
}
