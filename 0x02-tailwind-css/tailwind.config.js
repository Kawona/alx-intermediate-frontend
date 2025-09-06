/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",          // match ALL html/js files in project root
    "./src/**/*.{html,js}",   // match everything inside src
    "./dist/**/*.{html,js}",  // (optional) if you keep html in dist later
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
