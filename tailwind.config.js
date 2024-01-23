/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx}',
    './src/pages/**/*.{html,js,jsx}',
    './src/common/**/*.{html,js,jsx}',
    './src/index.html',
    './src/**/*.js',
    './src/**/*.js',
  ],
  theme: {
    colors: {},
    container: {
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {
      textDecorationThickness: {
        3: '3px',
      },
      textDecorationColor: {
        3: '#b6e4f8',
      },
      gridTemplateColumns: {
        'layout-2': 'minmax(260px, 340px) 1fr',
      },
      gridTemplateRows: {
        'layout-4': '80px 45px 1fr 70px',
      },
      colors: {
        'regal-blue': '#8eb7ee',
        'simple-blue': '#3a62f4',
        'main-white': '#fff',
        'grayish-white': '#f7f7f7',
        'stone-300': 'rgb(214 211 209)',
        'stone-600': '#c8c8c8',
      },
    },
  },
  plugins: [require('tailwind-children')],
};
