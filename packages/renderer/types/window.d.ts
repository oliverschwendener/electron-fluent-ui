import type { ContextBridge } from "../../preload/src/Bridge";

export declare global {
    interface Window {
        ContextBridge: ContextBridge;
    }
}
