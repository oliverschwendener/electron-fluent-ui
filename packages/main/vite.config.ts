import { builtinModules } from "module";
import { defineConfig } from "vite";

export default defineConfig({
    mode: process.env.MODE,
    root: __dirname,
    envDir: process.cwd(),
    build: {
        sourcemap: "inline",
        target: "node16",
        outDir: "dist",
        assetsDir: ".",
        minify: process.env.MODE !== "development",
        lib: {
            entry: "src/index.ts",
            formats: ["cjs"],
        },
        rollupOptions: {
            external: ["electron", ...builtinModules.flatMap((p) => [p, `node:${p}`])],
            output: {
                entryFileNames: "[name].cjs",
            },
        },
        emptyOutDir: true,
    },
});
