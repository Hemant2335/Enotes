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
          primary: "#F28C18",

          secondary: "#6D3A9C",

          accent: "#51A800",

          neutral: "#1B1D1D",

          info: "#2563EB",

          success: "#16A34A",

          warning: "#D97706",

          error: "#DC2626",
        },
      },
      "dark",
      "cupcake",
      "forest"
    ],
  },
  plugins: [require("daisyui")],
};
