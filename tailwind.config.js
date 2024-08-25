/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './*.js'
  ],
  theme: {
    extend: {
      colors:{
        'darkBlue':'#020617'
      },
      animation: {
        fadeIn: 'fadeIn 0.5s forwards',
        fadeOut: 'fadeOut 0.5s 1s forwards'
      },
    },
  },
  plugins: [],
}

