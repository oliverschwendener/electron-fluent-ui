import {
  Badge,
  Button,
  Card,
  Dropdown,
  makeStyles,
  Option,
  ProgressBar,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Text,
  tokens,
  Tooltip,
} from "@fluentui/react-components";
import {
  ArrowClockwise16Regular,
  ArrowDownload16Regular,
  ArrowDownRegular,
  ArrowUpRegular,
  DesktopRegular,
  PeopleRegular,
  ShieldCheckmarkRegular,
  TimerRegular,
} from "@fluentui/react-icons";
import type { ReactElement } from "react";

type Stat = {
  label: string;
  icon: ReactElement;
  value: string;
  delta: string;
  trend: "up" | "down";
};

const stats: Stat[] = [
  { label: "Active users", icon: <PeopleRegular />, value: "12,483", delta: "+12.4%", trend: "up" },
  { label: "Sessions", icon: <DesktopRegular />, value: "48.1k", delta: "+3.2%", trend: "up" },
  {
    label: "Crash-free sessions",
    icon: <ShieldCheckmarkRegular />,
    value: "99.6%",
    delta: "+0.2%",
    trend: "up",
  },
  {
    label: "Avg. session length",
    icon: <TimerRegular />,
    value: "12m 34s",
    delta: "-1.8%",
    trend: "down",
  },
];

const dailyActiveUsers = [
  { day: "Mon", value: 8200 },
  { day: "Tue", value: 9100 },
  { day: "Wed", value: 8700 },
  { day: "Thu", value: 10400 },
  { day: "Fri", value: 11900 },
  { day: "Sat", value: 7300 },
  { day: "Sun", value: 6800 },
];

const platforms = [
  { name: "Windows", share: 0.62 },
  { name: "macOS", share: 0.28 },
  { name: "Linux", share: 0.1 },
];

type Release = {
  version: string;
  channel: "Stable" | "Beta" | "Canary";
  users: string;
  crashFree: string;
  adoption: number;
};

const releases: Release[] = [
  { version: "v2.14.0", channel: "Stable", users: "9,812", crashFree: "99.7%", adoption: 0.82 },
  {
    version: "v2.15.0-beta.2",
    channel: "Beta",
    users: "1,204",
    crashFree: "98.9%",
    adoption: 0.34,
  },
  { version: "v2.13.2", channel: "Stable", users: "1,377", crashFree: "99.5%", adoption: 0.12 },
  {
    version: "v2.16.0-nightly",
    channel: "Canary",
    users: "90",
    crashFree: "97.1%",
    adoption: 0.03,
  },
];

const channelColor: Record<Release["channel"], "success" | "warning" | "informative"> = {
  Stable: "success",
  Beta: "warning",
  Canary: "informative",
};

const maxDailyValue = Math.max(...dailyActiveUsers.map((entry) => entry.value));

const useStyles = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  title: {
    margin: 0,
  },
  headerControls: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  statCard: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  statLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    color: tokens.colorNeutralForeground3,
  },
  statValue: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: tokens.fontWeightSemibold,
    lineHeight: tokens.lineHeightHero800,
  },
  statDelta: {
    alignSelf: "flex-start",
  },

  chartsRow: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "1rem",
    marginTop: "1rem",
  },
  chart: {
    display: "flex",
    alignItems: "flex-end",
    gap: "0.5rem",
    height: "11rem",
    marginTop: "1rem",
  },
  bar: {
    flex: "1 1 0",
    backgroundColor: tokens.colorBrandBackground,
    borderRadius: "4px 4px 0 0",
    ":hover": {
      backgroundColor: tokens.colorBrandBackgroundHover,
    },
  },
  chartLabels: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "0.25rem",
  },
  chartLabel: {
    flex: "1 1 0",
    textAlign: "center",
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },

  platformList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
  },
  platformRow: {
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  },
  platformHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  platformShare: {
    color: tokens.colorNeutralForeground3,
  },

  tableCard: {
    marginTop: "1rem",
  },
  adoptionCell: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  adoptionBar: {
    width: "8rem",
  },
});

export const DashboardPage = () => {
  const styles = useStyles();

  return (
    <section>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <div className={styles.headerControls}>
          <Dropdown
            appearance="filled-lighter"
            defaultValue="Last 7 days"
            defaultSelectedOptions={["Last 7 days"]}
          >
            <Option>Last 7 days</Option>
            <Option>Last 30 days</Option>
            <Option>Last 90 days</Option>
          </Dropdown>
          <Button icon={<ArrowClockwise16Regular />}>Refresh</Button>
          <Button icon={<ArrowDownload16Regular />}>Export</Button>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat) => (
          <Card key={stat.label} className={styles.statCard}>
            <span className={styles.statLabel}>
              {stat.icon}
              {stat.label}
            </span>
            <span className={styles.statValue}>{stat.value}</span>
            <Badge
              className={styles.statDelta}
              appearance="tint"
              color={stat.trend === "up" ? "success" : "danger"}
              icon={stat.trend === "up" ? <ArrowUpRegular /> : <ArrowDownRegular />}
            >
              {stat.delta}
            </Badge>
          </Card>
        ))}
      </div>

      <div className={styles.chartsRow}>
        <Card>
          <Text weight="semibold">Daily active users</Text>
          <div className={styles.chart}>
            {dailyActiveUsers.map((entry) => (
              <Tooltip
                key={entry.day}
                content={`${entry.day}: ${entry.value.toLocaleString("en-US")}`}
                relationship="label"
              >
                <div
                  className={styles.bar}
                  style={{ height: `${(entry.value / maxDailyValue) * 100}%` }}
                />
              </Tooltip>
            ))}
          </div>
          <div className={styles.chartLabels}>
            {dailyActiveUsers.map((entry) => (
              <span key={entry.day} className={styles.chartLabel}>
                {entry.day}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <Text weight="semibold">Platforms</Text>
          <div className={styles.platformList}>
            {platforms.map((platform) => (
              <div key={platform.name} className={styles.platformRow}>
                <span className={styles.platformHeader}>
                  <span>{platform.name}</span>
                  <span className={styles.platformShare}>{Math.round(platform.share * 100)}%</span>
                </span>
                <ProgressBar value={platform.share} thickness="large" />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className={styles.tableCard}>
        <Text weight="semibold">Releases</Text>
        <Table aria-label="Releases">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Version</TableHeaderCell>
              <TableHeaderCell>Channel</TableHeaderCell>
              <TableHeaderCell>Users</TableHeaderCell>
              <TableHeaderCell>Crash-free</TableHeaderCell>
              <TableHeaderCell>Adoption</TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {releases.map((release) => (
              <TableRow key={release.version}>
                <TableCell>{release.version}</TableCell>
                <TableCell>
                  <Badge appearance="tint" color={channelColor[release.channel]}>
                    {release.channel}
                  </Badge>
                </TableCell>
                <TableCell>{release.users}</TableCell>
                <TableCell>{release.crashFree}</TableCell>
                <TableCell>
                  <span className={styles.adoptionCell}>
                    <ProgressBar className={styles.adoptionBar} value={release.adoption} />
                    {Math.round(release.adoption * 100)}%
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </section>
  );
};
