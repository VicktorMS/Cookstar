/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#ffc101",
          "secondary": "#cfba64",
          'accent': "#cfba64",
          'primary-content': "#fff"
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "#ffc101",
          "secondary": "#cfba64",
          'accent': "#cfba64",
          'primary-content': "#fff"
        }
      },
    ],
  },
  plugins: [require("daisyui")],
}

