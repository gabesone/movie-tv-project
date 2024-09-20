import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://movies-api-gabesone.vercel.app",
    },
  },
});

// {
//   target: "https://movies-api-gabesone.vercel.app",
//   changeOrigin: true,
//   secure: true,
//   rewrite: (path) => path.replace(/^\/api/, ""),
// }
