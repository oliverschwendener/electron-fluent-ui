import { InlineConfig, LogLevel, ViteDevServer, WebSocketServer, build, createLogger, createServer } from "vite";
import electronPath from "electron";
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { OutputPlugin } from "rollup";

const mode = (process.env.MODE = process.env.MODE || "development");

const LOG_LEVEL: LogLevel = "info";

const sharedConfig: InlineConfig = {
    mode,
    build: {
        watch: {},
    },
    logLevel: LOG_LEVEL,
};

const stderrFilterPatterns = [
    // warning about devtools extension
    // https://github.com/cawa-93/vite-electron-builder/issues/492
    // https://github.com/MarshallOfSound/electron-devtools-installer/issues/143
    /ExtensionLoadWarning/,
];

type GetWatcherParams = {
    name: string;
    configFile: string;
    writeBundle: OutputPlugin["writeBundle"];
};

const getWatcher = ({ name, configFile, writeBundle }: GetWatcherParams) => {
    return build({
        ...sharedConfig,
        configFile,
        plugins: [{ name, writeBundle }],
    });
};

const setupMainPackageWatcher = ({ config }: ViteDevServer) => {
    // Create VITE_DEV_SERVER_URL environment variable to pass it to the main process.
    const protocol = config.server.https ? "https:" : "http:";
    const host = config.server.host || "localhost";
    const port = config.server.port;
    const path = "/";
    process.env.VITE_DEV_SERVER_URL = `${protocol}//${host}:${port}${path}`;

    const logger = createLogger(LOG_LEVEL, {
        prefix: "[main]",
    });

    let spawnProcess: ChildProcessWithoutNullStreams | null = null;

    return getWatcher({
        name: "reload-app-on-main-package-change",
        configFile: "packages/main/vite.config.ts",
        writeBundle() {
            if (spawnProcess !== null) {
                spawnProcess.off("exit", process.exit);
                spawnProcess.kill("SIGINT");
                spawnProcess = null;
            }

            spawnProcess = spawn(String(electronPath), ["."]);

            spawnProcess.stdout.on(
                "data",
                (rawData) => rawData.toString().trim() && logger.warn(rawData.toString(), { timestamp: true })
            );
            spawnProcess.stderr.on("data", (rawData) => {
                const data = rawData.toString().trim();
                const mayIgnore = stderrFilterPatterns.some((r) => r.test(data));
                if (!data || mayIgnore) {
                    return;
                }
                logger.error(data, { timestamp: true });
            });

            spawnProcess.on("exit", process.exit);
        },
    });
};

const setupPreloadPackageWatcher = ({ ws }: { ws: WebSocketServer }) =>
    getWatcher({
        name: "reload-page-on-preload-package-change",
        configFile: "packages/preload/vite.config.ts",
        writeBundle() {
            ws.send({
                type: "full-reload",
            });
        },
    });

(async () => {
    try {
        const viteDevServer = await createServer({
            ...sharedConfig,
            configFile: "packages/renderer/vite.config.ts",
        });

        await viteDevServer.listen();

        await setupPreloadPackageWatcher(viteDevServer);
        await setupMainPackageWatcher(viteDevServer);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
