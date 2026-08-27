import electron from "vite-plugin-electron/simple";
import react from "@vitejs/plugin-react";

export default {
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
  ],
};
