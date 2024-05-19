/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Azul-oscuro': '#0081A7',
        
      }
    },
  },
  plugins: [
    require("tw-elements-react/dist/plugin.cjs"),
    
  ],
}

