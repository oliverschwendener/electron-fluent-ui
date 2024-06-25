// @ts-check

import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    ...tseslint.config(eslint.configs.recommended, ...tseslint.configs.recommended),
    {
        ignores: ["coverage/", "dist-main/", "dist-preload/", "dist-renderer/", "node_modules/"],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
];
