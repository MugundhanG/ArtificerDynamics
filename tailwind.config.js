/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0a1628', light: '#122040' },
        secondary: '#1e3a5f',
        accent: { DEFAULT: '#e8742b', hover: '#d4631e' },
        teal: { DEFAULT: '#0ea5a0', light: '#14c8c2' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
