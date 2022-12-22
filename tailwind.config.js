/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["!font-sans", "!font-serif", "!font-mono", "!font-grotesque"],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      colors: {
        dark: {
          900: "#141414",
          800: "#1B1B1B",
          700: "#2D2D2D",
          600: "#3D3D3D",
          500: "#4D4D4D",
          400: "#5D5D5D",
          300: "#6D6D6D",
          200: "#7D7D7D",
          100: "#8D8D8D",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
        mono: ["Chivo Mono", "monospace"],
        grotesque: ["ambit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
