/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBg": "#252636",
        "darkBgHover": "#333547",
        "darkBgLight": "#2a2a3c",
        "lightBg": "#ffffff",
        "lightBgDark": "#f5f5f5",
        "highlight": "#fec212",
        "highlightHover": "#ffce3d",
        "highlightOpac": 'rgba(254, 194, 18, .8)',
        "darkText": "#000000",
        "lightTextHover": "#ffffff",
        "lightText": "#ffffff",

        "drawerClearBg": "rgba(0,0,0, .7)",
      }
    },
  },
  plugins: [],
}

