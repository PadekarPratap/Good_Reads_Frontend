/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f4f2e9",
        secondary: "#58371f",
        flowral: '#7584e9'
      },
      fontFamily:{
        YsabeauSC: ['Ysabeau SC', 'sans-serif'],
        GentiumBookPlus: ['Gentium Book Plus', 'sans-serif' ],
        RobotoCondensed: ['Roboto Condensed', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
