import react from "@vitejs/plugin-react";
import { rmSync } from "fs";
import { join } from "path";
import { defineConfig, type AliasOptions } from "vite";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import pkg from "./package.json";

const rendererRoot = join(__dirname, "src", "renderer");
const mainEntryPoint = join(__dirname, "src", "main", "index.ts");
const preloadEntryPoint = join(__dirname, "src", "preload", "index.ts");

const rendererOutDir = join(__dirname, "dist-renderer");
const mainOutDir = join(__dirname, "dist-main");
const preloadOutDir = join(__dirname, "dist-preload");

export default defineConfig(({ command }) => {
    rmSync("dist-main", { recursive: true, force: true });
    rmSync("dist-preload", { recursive: true, force: true });

    const isServe = command === "serve";
    const isBuild = command === "build";
    const sourcemap = isServe || process.argv.includes("--sourcemap");

    const resolve: { alias: AliasOptions } = {
        alias: {
            "@common": join(__dirname, "src", "common"),
        },
    };

    return {
        root: rendererRoot,
        build: {
            sourcemap,
            emptyOutDir: true,
            outDir: rendererOutDir,
        },
        resolve,
        plugins: [
            react(),
            electron([
                {
                    entry: mainEntryPoint,
                    onstart(options) {
                        options.startup();
                    },
                    vite: {
                        resolve,
                        build: {
                            sourcemap,
                            minify: isBuild,
                            outDir: mainOutDir,
                            rollupOptions: {
                                external: Object.keys("dependencies" in pkg ? pkg.dependencies : {}),
                            },
                        },
                    },
                },
                {
                    entry: preloadEntryPoint,
                    onstart(options) {
                        // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
                        // instead of restarting the entire Electron App.
                        options.reload();
                    },
                    vite: {
                        resolve,
                        build: {
                            sourcemap: sourcemap ? "inline" : undefined,
                            minify: isBuild,
                            outDir: preloadOutDir,
                            rollupOptions: {
                                external: Object.keys("dependencies" in pkg ? pkg.dependencies : {}),
                            },
                        },
                    },
                },
            ]),
            process.env.NODE_ENV === "test" ? null : renderer(),
        ],
        server: (() => ({
            host: "127.0.0.1",
            port: 7777,
        }))(),
        clearScreen: false,
        test: {
            root: "src",
        },
    };
});
