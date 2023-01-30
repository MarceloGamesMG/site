/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        minhaFonte: ['Righteous'],
      },
      backgroundImage: {
        bg1: 'url(/bg1.jpeg)',
        bg2:'url(/bg2.jpeg)',
        bg3:'url(/bg3.jpg)',
      },
        colors: {
          'tema-site': '#2B2B2B',
          'second-tema-site': '#00AC00',
          'branco': '#FDFDFD',
          'texto': '#1A1A1A',
          

        },
    dropShadow: {
        verde: '1px 1px 2px #00AC00',
        verdeB: '1px 1px 10px #00AC00',
        dark1:'1px 1px 1px black',
        branco1:'1px 1px 0px white',
        dark2:'1px 1px 1px #1A1A1A',
        
      }
      
    },
  },
  plugins: [],
}
