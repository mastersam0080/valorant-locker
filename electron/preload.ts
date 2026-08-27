import { contextBridge, ipcRenderer } from "electron";

function hideWindow() {
  ipcRenderer.send("window:hide");
}

export const electron = { hideWindow };

contextBridge.exposeInMainWorld("electron", electron);
