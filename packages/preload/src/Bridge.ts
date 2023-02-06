export type ContextBridge = {
    reactAppStarted: () => void;
    onNativeThemeChanged: (callback: () => void) => void;
    themeShouldUseDarkColors: () => boolean;
    getContext: () => {
        userName: string;
        computerName: string;
    };
};
