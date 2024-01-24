import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Use JSDOM for browser-like environment
    setupFiles: "./src/tests/setup", // Optional setup file
  },
});
