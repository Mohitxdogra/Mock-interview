import * as path from "node:path"; // ✅ Node.js ke liye sahi import
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // ✅ Local network access allow karega
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Fix: Path properly resolve hoga
    },
  },
});
