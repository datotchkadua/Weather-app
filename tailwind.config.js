/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "md": "830px",
      },
      textUnderlineOffset: {
        10: "10px",
      },
    },
  },
  plugins: [],
};
