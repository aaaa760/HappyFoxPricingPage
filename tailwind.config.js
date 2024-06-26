/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      screens: {
        'nav': '1302px',
      },
      width:{
        '1110px': '1110px',
      },
      colors: {
        'custom-bg': '#ffecec',
        'custom-border': 'rgb(255 58 58 / 20%)',
        'custom-gray': '#eee',
      },
    },
  },
  plugins: [],
}