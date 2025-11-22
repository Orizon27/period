/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'period-burgundy': '#6B3C4C',
        'period-burgundy-light': '#7A4A57',
        'period-coral': '#EF446C',
        'period-coral-dark': '#D93A5C',
      },
    },
  },
  plugins: [],
};
