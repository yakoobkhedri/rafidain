/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      // 'numberfa': 'numberfa'
    },
    extend: {
      colors: {
        'primary': '#fb3b00',
      },
    }
  },
  plugins: [
  ],
}

