import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/pearls-pizza/",
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "assets"),
    },
  },
});
