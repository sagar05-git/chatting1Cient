/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '120': '30rem',
        '128': '32rem',
        '132': '33.5rem',
      },
      height: {
        '8/10': '80%',
      },
      maxHeight: {
        'screen-minus-13': 'calc(100vh - 13rem)',
        'screen-minus-9': 'calc(100vh - 9rem)',
        '100':'25rem',
        '110':'27.5rem'
      },
    },
  },
  plugins: [
    daisyui,
  ],
}