import { BrowserWindow, ipcMain } from "electron";

ipcMain.on("window:hide", (event) =>
  BrowserWindow.fromWebContents(event.sender)?.hide(),
);
