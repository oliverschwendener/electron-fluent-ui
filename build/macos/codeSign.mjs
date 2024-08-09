import { execSync } from "child_process";
import { existsSync } from "fs";
import { join } from "path";

/**
 * This function performs an "ad-hoc" code signing on the packaged app.
 * Without this step the app will not run on modern macOS computers.
 * Remove this step if you intend to do real code signing.
 *
 * More info here: https://apple.stackexchange.com/questions/288291/what-are-the-restrictions-of-ad-hoc-code-signing
 *
 * @param {import("electron-builder").AfterPackContext} context
 * @returns void
 */
const codeSign = (context) => {
    const { appOutDir, packager } = context;

    const appName = packager.appInfo.productFilename;
    const appPath = join(appOutDir, `${appName}.app`);

    if (!existsSync(appPath)) {
        throw new Error(`App not found at path: ${appPath}`);
    }

    console.log("Performing ad-hoc signing...");

    try {
        // Remove existing signature if any
        execSync(`codesign --remove-signature "${appPath}"`, { stdio: "inherit" });

        // Perform ad-hoc signing
        execSync(`codesign --force --deep -s - "${appPath}"`, { stdio: "inherit" });

        console.log("Ad-hoc signing completed successfully");
    } catch (error) {
        console.error("Error during ad-hoc signing:", error.message);
        throw error;
    }
};

export default codeSign;
