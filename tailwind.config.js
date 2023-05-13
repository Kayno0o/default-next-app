/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './types/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'fade-from-left': 'fade-from-left 0.3s ease-out',
        'fade-to-left': 'fade-to-left 0.3s ease-out',
      },
      keyframes: {
        'fade-from-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-to-left': {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
        },
      },
    },
  },
};
