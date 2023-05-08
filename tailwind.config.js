/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#2E3349",
        secondary: "#19A1AE",
        tiertary: "#6B7082",
      },
      boxShadow: {
        cardShadow: "0px 50px 100px -20px rgba(8, 70, 94, 0.504835);",
      },
    },
  },
  plugins: [],
};
