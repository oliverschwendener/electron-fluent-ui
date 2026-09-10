import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import type { RendererApi } from "@shared/ipc";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { HomePage } from "./HomePage";

const api: RendererApi = {
  getVersions: vi.fn().mockResolvedValue({
    electron: "43.0.0",
    chromium: "142.0.0",
    node: "24.0.0",
  }),
};

vi.stubGlobal("api", api);

afterEach(cleanup);

const renderHomePage = () =>
  render(
    <FluentProvider theme={webLightTheme}>
      <HomePage />
    </FluentProvider>,
  );

describe("HomePage", () => {
  it("renders the versions provided by the preload api", async () => {
    renderHomePage();

    expect(await screen.findByText("43.0.0")).toBeDefined();
    expect(screen.getByText("142.0.0")).toBeDefined();
    expect(screen.getByText("24.0.0")).toBeDefined();
  });

  it("toggles the notifications switch", async () => {
    renderHomePage();

    // Fluent UI's Switch renders a checkbox input with role="switch".
    const toggle = await screen.findByRole("switch");
    expect(screen.getByText("Notifications off")).toBeDefined();

    fireEvent.click(toggle);

    expect(await screen.findByText("Notifications on")).toBeDefined();
  });
});
