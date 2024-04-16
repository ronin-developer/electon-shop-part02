/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primaryBlue': '#003F62',
      'secondaryYelow': '#EDA415',
      'tertiaryGrey': '#F4F4F4',
      'textWhite': '#FFFFFF',
      'textBlack': '#292D32',
      'textLightBlue': '#2E8FC5',
      'textBlue': '#1B5A7D',
      'starGrey': '#ACACAC',
      'skyBlue': '#E2F4FF',
      'lightGreen' : '#30BD57',
      'mainRed' : '#C33131',
    },
    extend: {},
  },
  plugins: [],
}

