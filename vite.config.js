import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/productos": {
        target: "https://backend-kaffo-production.up.railway.app",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
