module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-img': "url('/src/assets/img/unsplash/taylor-franz-GJogrGZxKJE-unsplash.jpg')",
      })
    },
    colors: {
      brown: '#261911',
      orange: '#A15C38',
      'dark-orange': '#703c21',
      white: '#F7F1F0',
      pink: '#C3A6A0',
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'serif': ['Lustria', 'serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
