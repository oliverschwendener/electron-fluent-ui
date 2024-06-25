// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
    ...tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended),
    {
        ignores: [
            "coverage/",
            "dist-main/",
            "dist-preload/",
            "dist-renderer/",
            "node_modules/",
            "electron-builder.config.js",
        ],
    },
];
