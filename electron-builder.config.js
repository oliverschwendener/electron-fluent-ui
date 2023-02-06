/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
    appId: "com.electron.fluentui",
    productName: "Electron Fluent UI",
    directories: {
        output: "dist",
        buildResources: "build_resources",
    },
    files: ["packages/**/dist/**"],
    extraMetadata: {
        version: process.env.VITE_APP_VERSION,
    },
    mac: {
        icon: "build_resources/icon.png",
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
        icon: "build_resources/icon.ico",
    },
    linux: {
        target: [{ target: "AppImage" }, { target: "snap" }, { target: "deb" }, { target: "zip" }],
    },
};

module.exports = config;
