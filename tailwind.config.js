/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
