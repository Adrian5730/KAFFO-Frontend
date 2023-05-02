import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/productos": {
        target: "https://backend-kaffo-production-8463.up.railway.app",
        changeOrigin: true,
      },
      "/payment":{
        target: "http://localhost:5050/service",
        changeOrigin: true,
      }
    },
  },
  plugins: [react()],
});
