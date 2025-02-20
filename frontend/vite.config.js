import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@scss": path.resolve(__dirname, "src/assets/scss"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, "src/assets/scss")],
        additionalData: `@use "@scss/variables.scss" as *;`,
      },
    },
  },
});
