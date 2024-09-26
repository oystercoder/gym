/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20":"#F8F4EB",
        "gray-50":"#EFE6E6",
        "gray-70":"#D3D3D3",
        "gray-80":"#B1B1B1",
        "gray-90":"#A9A9A9",
        "gray-95":"#999999",
        "gray-500":"#5E0000",
        "primary-100":"#FFE1E0",
        "primary-200":"#FFC5C5",
        "primary-300":"#FFA6A3",
        "secoundary-500":"#FFCD58",
        "secoundary-600":"#FFC107",


      },
      backgroundImage:(theme)=>({
        "gradient-yellowred":"linear-gradient(90deg,#FF616A 0%,#FFC837 100%)",
        "mobile-home":"url('./src/assets/HomePageGraphic.png')",

      }),
      fontFamily: {
        "dmsans":["DM Sans","sans-serif"],
        "montserrat":["Montserrat","sans-serif"],
      },
      content:{
        evolevetext:"url('./assets/EvolveText.png')",
        Abstract:"url('./assets/AbstractWaves.png')",
       sparkles:"url('./src/assets/Sparkles.png')",
       circles:"url('./assets/Circles.png')"
      },
      screens: {
        xs:"480px",
        sm:"768px",
        md:"1024px",
        lg:"1280px",
        xl:"1536px",


    },

  },
  plugins: [],
  }
}

