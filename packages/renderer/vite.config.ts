import { join } from "path";
import { builtinModules } from "module";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
    mode: process.env.MODE,
    root: __dirname,
    plugins: [react()],
    base: "",
    build: {
        sourcemap: true,
        target: "chrome98",
        outDir: "dist",
        assetsDir: ".",
        rollupOptions: {
            input: join(__dirname, "index.html"),
            external: [...builtinModules.flatMap((p) => [p, `node:${p}`])],
        },
        emptyOutDir: true,
    },
});
