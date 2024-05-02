/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open\\ Sans", "sans-serif"],
      },
      colors: {
        // (https://www.colorhunt.co/)
        monpics: {
          100: "#FAFAFA",
          200: "#DDE6ED",
          300: "#9DB2BF",
          400: "#526D82",
          500: "#27374D",
        },
      },
      gridTemplateColumns: {
        custom: "repeat(auto-fill, minmax(10rem, 1fr))",
      },
    },
  },
  plugins: [],
};
