/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
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
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        serif: ["Source Serif Pro", "serif"],
        mono: ["Chivo Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
