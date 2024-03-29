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
        hardenedRuntime: true,
        gatekeeperAssess: false,
        target: [
            {
                target: "dmg",
                arch: "universal",
            },
            {
                target: "zip",
                arch: "universal",
            },
        ],
    },
    win: {
        icon: "build/app-icon-dark.png",
        target: [
            {
                target: "msi",
            },
            {
                target: "nsis",
            },
            {
                target: "zip",
            },
            {
                target: "appx",
            },
        ],
    },
    linux: {
        category: "Utility",
        target: [
            {
                target: "AppImage",
            },
            {
                target: "deb",
            },
            {
                target: "zip",
            },
        ],
    },
    appx: {
        applicationId: "OliverSchwendener.ElectronFluentUI",
    },
};

module.exports = config;
