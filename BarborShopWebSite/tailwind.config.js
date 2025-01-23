const tailwindcss = require("@tailwindcss/vite");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths as needed
  theme: {
    extend: {
      colors: {
        themeyellow: "#a69f7d", // Use "colors" (plural) instead of "color"
      },
    },
  },
  plugins: [tailwindcss],
};