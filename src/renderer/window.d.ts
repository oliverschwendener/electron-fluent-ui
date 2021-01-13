import { Bridge } from "../shared/Bridge";

declare global {
    interface Window {
        Bridge: Bridge;
    }
}
