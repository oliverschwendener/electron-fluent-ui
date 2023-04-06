/// <reference types="vite-electron-plugin/electron-env" />

declare namespace NodeJS {
    interface ProcessEnv {
        DIST_ELECTRON: string;
        DIST: string;
        /** /dist/ or /public/ */
        PUBLIC: string;
    }
}
