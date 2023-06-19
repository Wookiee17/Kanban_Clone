/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
    },
    extend: {
      colors: {
        dark: '#0D062D',
        'gray-600': '#787486',
        'gray-300': '#DBDBDB',
        green: '#7AC555',
        orange: '#FFA500',
        'light-pink': '#E4CCFD',
        'light-blue': '#76A5EA',
        'dark-blue': '#5030E5',
      },
    },
  },
  plugins: [],
};
