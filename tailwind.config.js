/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#5a50e2",
          50: "#f1f0fc",
          100: "#e3e1fa",
          200: "#c6c3f5",
          300: "#aaa5ef",
          400: "#8d87ea",
          500: "#5a50e2",
          600: "#3e34ca",
          700: "#3329a1",
          800: "#252077",
          900: "#17154e",
        },
        secondary: {
          DEFAULT: "#ff8a00",
          50: "#fff5e6",
          100: "#ffebcc",
          200: "#ffd699",
          300: "#ffc266",
          400: "#ffad33",
          500: "#ff8a00",
          600: "#cc6f00",
          700: "#995200",
          800: "#663600",
          900: "#331b00",
        },
      },
    },
  },
  plugins: [],
} 