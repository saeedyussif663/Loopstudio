/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin sans', 'sans-serif'],
        alata: ['Alata'],
        leetterSpacing: {
          widest: '0.3em',
        }
      }
    },
  },
  plugins: [],
}

