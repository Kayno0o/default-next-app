/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './types/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'toast-fade-in-left': 'toast-fade-in-left 0.3s ease-out',
        'toast-fade-out-left': 'toast-fade-out-left 0.3s ease-out',
      },
      keyframes: {
        'toast-fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'toast-fade-out-left': {
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
