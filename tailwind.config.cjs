/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      colors: {
        "noway-dark": "#40514F",
        "noway-dark-darker": "#303E3F",
        "noway-light": "#E6FAF2",
        "noway-default": "#A2E0C9",
      }
    }
  },
   plugins: [
    require('daisyui')
  ]
};

