/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    "colors": {
      "blaue": {
        "50": "#4e9fff",
        "100": "#4495ff",
        "200": "#3a8bff",
        "300": "#3081ff",
        "400": "#2677f6",
        "500": "#1c6dec",
        "600": "#1263e2",
        "700": "#0859d8",
        "800": "#004fce",
        "900": "#0045c4"
      }
    }
  },
  content: [    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
