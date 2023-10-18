/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gray: "rgba(255, 255, 255, 0.5)",
      },
      spacing: {},
      fontFamily: {
        inder: "Inder",
        inter: "Inter",
      },
    },
    fontSize: {
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
