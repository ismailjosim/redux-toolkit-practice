/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fcb8a9",

          "secondary": "#b8dd30",

          "accent": "#e04548",

          "neutral": "#2D3239",

          "base-100": "#FFFFFF",

          "info": "#709CD7",

          "success": "#0D6856",

          "warning": "#E9AA35",

          "error": "#F25B4A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
