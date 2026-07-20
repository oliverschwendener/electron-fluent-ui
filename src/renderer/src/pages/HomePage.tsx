import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Dropdown,
  Field,
  makeStyles,
  Menu,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Option,
  Popover,
  PopoverSurface,
  PopoverTrigger,
  ProgressBar,
  Radio,
  RadioGroup,
  shorthands,
  Slider,
  SpinButton,
  Switch,
  tokens,
  Tooltip,
} from "@fluentui/react-components";
import {
  CopyRegular,
  DeleteRegular,
  EditRegular,
  MoreHorizontalRegular,
} from "@fluentui/react-icons";
import type { Versions } from "@shared/ipc";
import { type ComponentType, useEffect, useState } from "react";

const useStyles = makeStyles({
  versions: {
    display: "grid",
    gridTemplateColumns: "max-content max-content",
    gap: "0.25rem 1.5rem",
    "& dt": { fontWeight: tokens.fontWeightSemibold },
    "& dd": { margin: 0, fontVariantNumeric: "tabular-nums" },
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(16rem, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    padding: "1rem",
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke2),
    borderRadius: "0.5rem",
  },
  cardTitle: {
    margin: 0,
    fontSize: "0.8rem",
    fontWeight: tokens.fontWeightSemibold,
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    opacity: 0.6,
  },
  sliderRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  sliderGrow: {
    flexGrow: 1,
  },
  sliderValue: {
    minWidth: "3ch",
    textAlign: "right",
    fontVariantNumeric: "tabular-nums",
  },
  popoverTitle: {
    marginTop: 0,
    marginBottom: "0.5rem",
    fontWeight: tokens.fontWeightSemibold,
  },
  popoverText: {
    marginTop: 0,
    marginBottom: 0,
  },
});

const SwitchDemo = () => {
  const [notifications, setNotifications] = useState(false);

  return (
    <Switch
      checked={notifications}
      onChange={(_, data) => setNotifications(data.checked)}
      label={notifications ? "Notifications on" : "Notifications off"}
    />
  );
};

const CheckboxDemo = () => <Checkbox defaultChecked label="Install updates automatically" />;

const RadioGroupDemo = () => (
  <Field label="Window size">
    <RadioGroup defaultValue="medium">
      <Radio value="small" label="Small" />
      <Radio value="medium" label="Medium" />
      <Radio value="large" label="Large" />
    </RadioGroup>
  </Field>
);

const DropdownDemo = () => (
  <Field label="Theme">
    <Dropdown appearance="filled-lighter" defaultValue="System" defaultSelectedOptions={["System"]}>
      <Option>System</Option>
      <Option>Light</Option>
      <Option>Dark</Option>
    </Dropdown>
  </Field>
);

const SliderDemo = () => {
  const styles = useStyles();
  const [volume, setVolume] = useState(40);

  return (
    <div className={styles.sliderRow}>
      <Slider
        className={styles.sliderGrow}
        value={volume}
        onChange={(_, data) => setVolume(data.value)}
        aria-label="Volume"
      />
      <span className={styles.sliderValue}>{volume}</span>
    </div>
  );
};

const SpinButtonDemo = () => (
  <Field label="Tabs to restore">
    <SpinButton appearance="filled-lighter" defaultValue={3} min={0} max={99} />
  </Field>
);

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger disableButtonEnhancement>
      <Button appearance="subtle">Delete workspace…</Button>
    </DialogTrigger>
    <DialogSurface>
      <DialogBody>
        <DialogTitle>Delete workspace</DialogTitle>
        <DialogContent>
          This removes the workspace and all of its settings. This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <DialogTrigger disableButtonEnhancement>
            <Button>Cancel</Button>
          </DialogTrigger>
          <DialogTrigger disableButtonEnhancement>
            <Button appearance="primary" icon={<DeleteRegular />}>
              Delete
            </Button>
          </DialogTrigger>
        </DialogActions>
      </DialogBody>
    </DialogSurface>
  </Dialog>
);

const MenuDemo = () => (
  <Menu>
    <MenuTrigger disableButtonEnhancement>
      <Button icon={<MoreHorizontalRegular />}>Options</Button>
    </MenuTrigger>
    <MenuPopover>
      <MenuList>
        <MenuItem icon={<EditRegular />}>Rename</MenuItem>
        <MenuItem icon={<CopyRegular />}>Duplicate</MenuItem>
        <MenuDivider />
        <MenuItem icon={<DeleteRegular />}>Delete</MenuItem>
      </MenuList>
    </MenuPopover>
  </Menu>
);

const PopoverDemo = () => {
  const styles = useStyles();

  return (
    <Popover>
      <PopoverTrigger disableButtonEnhancement>
        <Button>What is this?</Button>
      </PopoverTrigger>
      <PopoverSurface>
        <p className={styles.popoverTitle}>Popover</p>
        <p className={styles.popoverText}>
          Anchored, dismissable content — click outside or press Escape to close.
        </p>
      </PopoverSurface>
    </Popover>
  );
};

const TooltipDemo = () => (
  <Tooltip content="Tooltips work with keyboard focus too." relationship="description">
    <Button>Hover or focus me</Button>
  </Tooltip>
);

const AccordionDemo = () => (
  <Accordion collapsible defaultOpenItems="styled">
    <AccordionItem value="styled">
      <AccordionHeader>Why Fluent UI?</AccordionHeader>
      <AccordionPanel>
        <p>
          Components ship fully styled with Microsoft's Fluent design tokens — no per-part CSS
          required.
        </p>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="theming">
      <AccordionHeader>How is theming handled?</AccordionHeader>
      <AccordionPanel>
        <p>
          FluentProvider switches between the light and dark theme based on the OS preference; page
          layout uses Fluent's makeStyles (Griffel) — no CSS files.
        </p>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);

const ProgressDemo = () => (
  <Field label="Downloading update" hint="64%">
    <ProgressBar value={0.64} />
  </Field>
);

const demos: { title: string; component: ComponentType }[] = [
  { title: "Switch", component: SwitchDemo },
  { title: "Checkbox", component: CheckboxDemo },
  { title: "Radio Group", component: RadioGroupDemo },
  { title: "Dropdown", component: DropdownDemo },
  { title: "Slider", component: SliderDemo },
  { title: "Spin Button", component: SpinButtonDemo },
  { title: "Dialog", component: DialogDemo },
  { title: "Menu", component: MenuDemo },
  { title: "Popover", component: PopoverDemo },
  { title: "Tooltip", component: TooltipDemo },
  { title: "Accordion", component: AccordionDemo },
  { title: "Progress Bar", component: ProgressDemo },
];

export const HomePage = () => {
  const styles = useStyles();
  const [versions, setVersions] = useState<Versions | null>(null);

  useEffect(() => {
    void window.api.getVersions().then(setVersions);
  }, []);

  return (
    <section>
      <h1>Home</h1>
      <p>Versions reported by the main process over typed IPC:</p>
      {versions ? (
        <dl className={styles.versions}>
          <dt>Electron</dt>
          <dd>{versions.electron}</dd>
          <dt>Chromium</dt>
          <dd>{versions.chromium}</dd>
          <dt>Node</dt>
          <dd>{versions.node}</dd>
        </dl>
      ) : (
        <p>Loading versions…</p>
      )}

      <h2>Fluent UI components</h2>
      <div className={styles.cards}>
        {demos.map(({ title, component: Demo }) => (
          <div key={title} className={styles.card}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <Demo />
          </div>
        ))}
      </div>
    </section>
  );
};
