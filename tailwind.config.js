/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF9549",
        gray: "#939697",
        grayish: "#252C2C",
        blackBg: "#181818",
      },
    },
  },
  plugins: [],
};
