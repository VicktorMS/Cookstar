/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "menuLayout": '22% 1fr'
      },
      gridTemplateRows:{
        "menuLayout": 'minmax(100px, auto)'
      }
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#faca34",
          "secondary": "#f97316",
          'accent': "#cfba64",
          'primary-content': "#fff",
          'secondary-content': "#fff",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#faca34",
          "secondary": "#cfba64",
          'accent': "#cfba64",
          'primary-content': "#fff",
          'secondary-content': "#fff",
        }
      },
    ],
  },
  plugins: [require("daisyui")],
}

