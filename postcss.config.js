/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
