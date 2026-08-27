import { BrowserWindow, ipcMain } from "electron";

ipcMain.on("window:hide", (event) => {
  const window = BrowserWindow.fromWebContents(event.sender);

  window?.hide();
});
