import { app, BrowserWindow } from "electron";

(async () => {
    await app.whenReady();
    new BrowserWindow().loadURL(new URL("../renderer/dist/index.html", `file://${__dirname}`).toString());
})();
