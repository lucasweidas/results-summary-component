/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        blue: {
          pale: 'hsl(221, 100%, 96%)',
          dark: 'hsl(224, 30%, 27%)',
          lavender: 'hsl(241, 100%, 89%)',
        },
      },
    },
  },
  plugins: [],
};
