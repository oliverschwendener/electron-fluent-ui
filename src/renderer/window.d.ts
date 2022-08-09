import { Bridge } from "./Bridge";

declare global {
    interface Window {
        Bridge: Bridge;
    }
}
