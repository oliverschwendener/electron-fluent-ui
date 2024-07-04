/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
    appId: "com.electron.fluentui",
    productName: "Electron Fluent UI",
    directories: {
        output: "release",
        buildResources: "build",
    },
    files: ["dist-main/index.js", "dist-preload/index.js", "dist-renderer/**/*"],
    extraMetadata: {
        version: process.env.VITE_APP_VERSION,
    },
    mac: {
        icon: "build/app-icon-dark.png",
        target: [{ target: "dmg" }, { target: "zip" }],
    },
    win: {
        icon: "build/app-icon-dark.png",
        target: [{ target: "msi" }, { target: "zip" }, { target: "appx" }],
    },
    linux: {
        category: "Utility",
        target: [{ target: "AppImage" }, { target: "deb" }, { target: "zip" }],
    },
    appx: {
        applicationId: "OliverSchwendener.ElectronFluentUI",
        backgroundColor: "#1F1F1F",
        displayName: "Electron Fluent UI",
        identityName: "1915OliverSchwendener.ElectronFluentUI",
        publisher: "CN=AD6BF16D-50E3-4FD4-B769-78A606AFF75E",
        publisherDisplayName: "Oliver Schwendener",
        languages: ["en-US"],
    },
};

module.exports = config;
