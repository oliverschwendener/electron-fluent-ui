/// <reference types="vite/client" />

interface ImportMetaEnv {
    SOME_VALUE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
