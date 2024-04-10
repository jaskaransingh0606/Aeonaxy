/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '128' : '32rem',
        '300' : '75rem',
        '240' : '60rem',
        '200' : '50rem',

      },
      screens:{
        
        'vvsm' :{'max': '440px'},
        'vsm' :{'max': '476px'},
        'sm' :{'max': '639px'},
        'md' :{'max': '767px'},
        'lg' :{'max': '1023px'},
        'xl' :{'max': '1279px'},
    
      },
    },
  },
 
  plugins: [],
}

