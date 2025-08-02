/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: '#e0f2ff',
          200: '#b3dcf9',
          300: '#85c6f3',
          400: '#57b0ed',
          500: '#2c8bdd',
          600: '#2271b4',
          700: '#185790',
          800: '#103c66',
          900: '#08233d',
        },
      },
    },
  },
  plugins: [],
}

