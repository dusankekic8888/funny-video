module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {},
    fill: {
      current: 'currentColor',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
