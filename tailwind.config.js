/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans: [
        "Inter, sans-serif",
      ]
    },
    extend: {
      fontSize:{
        desing: '15px'
      },
      colors: {
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: {
          DEFAULT: 'hsl(233, 8%, 79%)', 
          900: 'hsl(236, 13%, 42%)'
        },
        darkBlue: 'hsl(240, 100%, 5%)',
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)'
      }
    },
  },
  plugins: [],
}

