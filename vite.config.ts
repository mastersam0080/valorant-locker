import path from "node:path";

import { defineConfig } from "vite";

import electron from "vite-plugin-electron/simple";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = {
  plugins: [
    electron({
      main: {
        // Shortcut of `build.lib.entry`
        entry: "electron/main.ts",
      },
      preload: {
        // Shortcut of `build.rolldownOptions.input` (`build.rollupOptions.input` on Vite < 8)
        input: "electron/preload.ts",
      },
      // Optional: Use Node.js API in the Renderer process
      //   renderer: {},
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve("."),
    },
  },
};

export default defineConfig(config);
