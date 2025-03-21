import * as path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression(), // ✅ Gzip/Brotli compression enable
  ],
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Alias setup
    },
  },
  build: {
    chunkSizeWarningLimit: 500, // ⚠️ Warning limit adjust
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor"; // React alag rakho
            if (id.includes("lodash")) return "lodash-vendor"; // Lodash alag rakho
            if (id.includes("firebase")) return "firebase-vendor"; // Firebase alag rakho
            return "vendor"; // Baaki third-party libraries ek saath
          }
        },
      },
    },
  },
});
