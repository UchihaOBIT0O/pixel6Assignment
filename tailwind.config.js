/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: "Josefin Sans, sans-serif",
      },
      colors: {
        primary: "#18272e",
        secondary: "#699594",
        third: "#fd5e51",
        fourth: "#f7754e",
      },
    },
  },
  plugins: [],
};
