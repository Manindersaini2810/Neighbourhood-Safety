/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#35858E",
        secondary: "#7DA78C",
        accent: "#C2D099",
        light: "#E6EEC9",
      },
    },
  },
  plugins: [],
}
