/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      xs:'650px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      fontFamily:{
        sans:['Bai Jamjuree', 'sans-serif']
      }
    },
  },
  plugins: [],
}

