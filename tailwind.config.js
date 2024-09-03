/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '32rem',
        '130': '34rem',
      },
      height: {
        '128': '32rem',
        '130': '34rem',
      }},
  },
  plugins: [],
}