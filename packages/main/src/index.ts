import { app, BrowserWindow } from "electron";

(async () => {
    await app.whenReady();

    const window = new BrowserWindow();

    /**
     * URL for main window.
     * Vite dev server for development.
     * `file://../renderer/index.html` for production and test
     */
    const url =
        import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined
            ? import.meta.env.VITE_DEV_SERVER_URL
            : new URL("../renderer/dist/index.html", `file://${__dirname}`).toString();

    window.loadURL(url);
})();
