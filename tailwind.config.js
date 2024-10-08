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
      keyframes: {
        fadeIn: {
          '0%': { top: '0', opacity: 0 },
          '100%': { top: '64px', opacity: 1 }
        },
        fadeOut: {
          '0%': { top: '64px', opacity: 1 },
          '100%': { top: '0', opacity: 0 }
        },
      },
    },
  },
  plugins: [],
}

