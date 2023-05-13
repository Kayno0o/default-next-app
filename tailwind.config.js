/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './types/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'toast-fade-in': 'toast-fade-in 0.3s ease-out',
        'toast-fade-out': 'toast-fade-out 0.3s ease-out',
      },
      keyframes: {
        'toast-fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'toast-fade-out': {
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
