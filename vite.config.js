import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  css:{
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/main.scss";`, // Example for global imports
      },
    },
  },
  test: {
    environment: 'jsdom', // Set the environment to jsdom
    globals: true, // Enable global variables like describe, it, etc.

  },
});
