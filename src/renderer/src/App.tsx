import { makeStyles, Tab, TabList, tokens } from "@fluentui/react-components";
import { DataTrending16Regular, Home16Regular, Info16Regular } from "@fluentui/react-icons";
import { Outlet, useLocation, useNavigate } from "react-router";

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  nav: {
    padding: "0.5rem 1rem",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: tokens.colorNeutralStroke2,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    overflowY: "auto",
    padding: "1rem 1.5rem",
  },
});

export const App = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <TabList
          size="small"
          selectedValue={pathname}
          onTabSelect={(_, data) => void navigate(data.value as string)}
        >
          <Tab value="/" icon={<Home16Regular />}>
            Home
          </Tab>
          <Tab value="/dashboard" icon={<DataTrending16Regular />}>
            Dashboard
          </Tab>
          <Tab value="/about" icon={<Info16Regular />}>
            About
          </Tab>
        </TabList>
      </nav>
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};
