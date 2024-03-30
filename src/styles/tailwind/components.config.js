/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./public/components/**/*.html', './src/content/components/*.mdx'],
    safelist: ['keen-slider', 'keen-slider__slide'],
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
    presets: [require('./extend.preset.js')],
  }