/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['"Source Sans 3"', 'sans-serif']
    },
  },
  plugins: [
    // require('tailwindcss-animated'),
    require('tailwindcss-animate')
  ],
}
