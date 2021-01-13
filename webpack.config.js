const path = require("path");

const distributionDirectoryPath = path.join(__dirname, "dist");

const baseConfig = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        configFile: path.join(__dirname, ".babelrc"),
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
};

const mainConfig = {
    entry: path.join(__dirname, "src", "main", "main.ts"),
    output: {
        filename: "main.js",
        path: distributionDirectoryPath,
    },
    target: "electron-main",
};

const preloadConfig = {
    entry: path.join(__dirname, "src", "shared", "preload.ts"),
    output: {
        filename: "preload.js",
        path: distributionDirectoryPath,
    },
    target: "electron-preload",
};

const rendererConfig = {
    entry: path.join(__dirname, "src", "renderer", "renderer.tsx"),
    output: {
        filename: "renderer.js",
        path: distributionDirectoryPath,
    },
    target: "electron-renderer",
};

module.exports = [
    Object.assign({}, baseConfig, mainConfig),
    Object.assign({}, baseConfig, preloadConfig),
    Object.assign({}, baseConfig, rendererConfig),
];
