import { describe, expect, it } from "vitest";

import { IpcChannels } from "./ipc";

describe("IpcChannels", () => {
  it("has a unique name per channel", () => {
    const names = Object.values(IpcChannels);
    expect(new Set(names).size).toBe(names.length);
  });

  it("uses the app: prefix for every channel", () => {
    for (const name of Object.values(IpcChannels)) {
      expect(name).toMatch(/^app:/);
    }
  });
});
