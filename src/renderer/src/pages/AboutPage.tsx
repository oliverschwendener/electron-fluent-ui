import { makeStyles, Tab, TabList, type TabValue } from "@fluentui/react-components";
import { useState } from "react";

const useStyles = makeStyles({
  tabPanel: {
    paddingTop: "0.5rem",
  },
});

export const AboutPage = () => {
  const styles = useStyles();
  const [tab, setTab] = useState<TabValue>("stack");

  return (
    <section>
      <h1>About</h1>
      <TabList
        size="small"
        appearance="subtle"
        selectedValue={tab}
        onTabSelect={(_, data) => setTab(data.value)}
      >
        <Tab value="stack">Stack</Tab>
        <Tab value="structure">Structure</Tab>
      </TabList>
      <div className={styles.tabPanel}>
        {tab === "stack" && (
          <ul>
            <li>Electron with a sandboxed, context-isolated renderer</li>
            <li>Vite + electron-vite for dev server and builds</li>
            <li>React with React Router (hash routing)</li>
            <li>Fluent UI React (v9) for styled, accessible components and icons</li>
            <li>Vitest, oxlint and oxfmt for tests, linting and formatting</li>
          </ul>
        )}
        {tab === "structure" && (
          <ul>
            <li>
              <code>src/main</code> — main process, may import <code>src/shared</code>
            </li>
            <li>
              <code>src/preload</code> — preload bridge, may import <code>src/shared</code>
            </li>
            <li>
              <code>src/renderer</code> — React app, may import <code>src/shared</code>
            </li>
            <li>
              <code>src/shared</code> — types shared by all, imports none of them
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};
