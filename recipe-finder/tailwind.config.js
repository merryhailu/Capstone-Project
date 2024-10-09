/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
       extend: { 
      fontFamily: {
        Tangerine: ["Tangerine", "serif"],
      },
      backgroundImage:{
        'background-image': "url('../src/assets/images/Homepage.jpg')",
       },
    },
  },
  plugins: [],
}

