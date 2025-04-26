/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#232F3E", // AWS dark blue/navy
          50: "#E6EAEF",
          100: "#CCD5DF",
          200: "#99ABBF",
          300: "#66819F",
          400: "#33587F",
          500: "#232F3E", // AWS dark blue/navy
          600: "#1C2632",
          700: "#151C25",
          800: "#0F1319",
          900: "#08090C",
        },
        secondary: {
          DEFAULT: "#FF9900", // AWS primary orange
          50: "#FFF4E6",
          100: "#FFE8CC",
          200: "#FFD699",
          300: "#FFC266",
          400: "#FFAD33",
          500: "#FF9900", // Main AWS orange
          600: "#EC7211", // Alternate AWS orange (smile)
          700: "#CC7A00",
          800: "#995C00",
          900: "#331F00",
        },
        aws: {
          orange: "#FF9900",
          navy: "#232F3E",
          squid: "#31465F", // Darker blue used in certain elements
          anchor: "#00A1C9", // Teal blue for links/buttons
          smile: "#EC7211", // Alternate orange
        }
      },
    },
  },
  plugins: [],
} 