/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#0085FF',
        'transparent-main-color': '#F6F9FF',
        'not-black': '#1A1A1A',
        'not-active': '#5F5F5F',
        'not-red': '#FF4B4B',

        primary: {
          DEFAULT: '#0085FF',
          light:" rgba(0, 133, 255, 0.1)",
        },
        white:{
          DEFAULT: '#FFFFFF',
          light:"#D4D4D4",
        },
        black:{
          DEFAULT: '#1A1A1A',
        },
        grey:{
          DEFAULT: '#5F6374',
          light:"#F8F8F9",
          dark:"#979797",
        },

     
      },
      screens: {
        'xsL': '0px',
        'smL': '640px',
        'mdL': '786px',
        'lgL': '1024px',
        'xlL': '1280px',
        '2xlL': '1536px',



        'sm11': '689px',
        'sm10': '600px',
        'sm9': '450px',
        'sm8': '426px',
        'sm7': '337px',
        'sm6': '366px',
        'sm5': '398px',
        'sm4': '498px',
        'sm3': '522px',
        'sm2': '621px',
        'md2': '856px',
        'lg5': '1356px',
        'lg4': '1249px',
        'lg2': '1168px',
        'xlCustom': '1498px',
        'xl2': '1400px',
        'xl3': '1700px',
        'lg3': '1264px',

      },

      fontSize: {
        'xsLa': '12px',
        'smLa': '14px',
        'tiny': '16px',
        'baseLa': '20px',
        'lgLa':   '28px',
        'xlLa': '32px',
        '2xlLa': '40px',
        '3xlLa': '54px',
        '4xlLa': '56px',
      },



    },
  },
  plugins: [],
}