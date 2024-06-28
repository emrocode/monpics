/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      gridTemplateColumns: {
        custom: "repeat(auto-fill, minmax(10rem, 1fr))",
      },
    },
  },
  plugins: [],
};
