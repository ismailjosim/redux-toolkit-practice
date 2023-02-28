module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#312e81",

          "secondary": "#D926AA",

          "accent": "#1FB2A5",

          "neutral": "#191D24",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
