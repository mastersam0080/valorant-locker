/// <reference types="vite/client" />

import type { electron } from "@/electron/preload";

declare global {
  interface Window {
    electron: typeof electron;
  }
}

export {};
