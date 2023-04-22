import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/productos": {
        target: "http://localhost:5050",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
});
