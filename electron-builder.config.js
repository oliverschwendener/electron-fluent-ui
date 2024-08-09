/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const baseConfig = {
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
};

/**
 * @type {Record<NodeJS.Platform, import('electron-builder').Configuration>}
 */
const platformSpecificConfigurations = {
    darwin: {
        ...baseConfig,
        afterPack: "./build/macos/codeSign.mjs",
        mac: {
            icon: "build/app-icon-dark.png",
            target: [{ target: "dmg" }, { target: "zip" }],
        },
    },
    win32: {
        ...baseConfig,
        appx: {
            applicationId: "OliverSchwendener.ElectronFluentUI",
            backgroundColor: "#1F1F1F",
            displayName: "Electron Fluent UI",
            identityName: "1915OliverSchwendener.ElectronFluentUI",
            publisher: "CN=AD6BF16D-50E3-4FD4-B769-78A606AFF75E",
            publisherDisplayName: "Oliver Schwendener",
            languages: ["en-US"],
        },
        win: {
            icon: "build/app-icon-dark.png",
            target: [{ target: "msi" }, { target: "nsis" }, { target: "zip" }, { target: "appx" }],
        },
    },
    linux: {
        ...baseConfig,
        linux: {
            category: "Utility",
            icon: "build/app-icon-dark.png",
            target: [{ target: "AppImage" }, { target: "deb" }, { target: "zip" }],
        },
    },
};

module.exports = platformSpecificConfigurations[process.platform];
