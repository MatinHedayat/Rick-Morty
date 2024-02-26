/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      keyframes: {
        show: {
          '0%': { opacity: 0, transform: 'translateX(-2rem)' },
          '100%': { opacity: 100, transform: 'translateX(0)' },
        },
      },
      animation: {
        show: 'show 0.3s ease-in-out 1',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
