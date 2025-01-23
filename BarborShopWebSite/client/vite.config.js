import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/

export default defineConfig({
  theme: {
    extend: {
      color: {
        themeyellow: "#a69f7d",
      },
    },
  },

  plugins: [react(), tailwindcss()],
});
