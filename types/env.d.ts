/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CLIENT_ID: string;
    readonly VITE_DEV_SERVER_URL: string;
    readonly VITE_GRAPHQL_DEV_FLAGS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
