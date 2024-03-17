/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        "m-dark-blue" : "hsl(240, 38%, 20%)",
        "m-grayish-blue": "hsl(240, 18%, 77%)"
      },
      fontFamily: {
        // 300, 500, 700
        // ligth, medium y bold
        "m-inter" : "['Inter', sans-serif]"
      },
    },
  },
  plugins: [],
}

