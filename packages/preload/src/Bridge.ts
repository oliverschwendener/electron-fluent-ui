export type ContextBridge = {
    reactAppStarted: () => void;
    onNativeThemeChanged: (callback: () => void) => void;
    themeShouldUseDarkColors: () => boolean;
};
