/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "customColors":{
          100: "#f2f2f2"
        }
      },

      fontFamily: {
        "poppins": ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

