import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";

const ThemeContext = createContext({theme: null});

const shouldUseDarkColors = (): boolean =>
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
* Provides the theme context to child components.
*
* @param {Object} props - Component props.
* @param {React.ReactNode} props.children - Child components to be rendered.
* @returns {JSX.Element} The rendered component.
*/
export const ThemeProvider = ({children}) => {
  // Default theme name
  const defaultTheme = shouldUseDarkColors() ? "dark" : "light";

  // State hook to manage the theme state within the component.
  const [theme, setTheme] = useState(defaultTheme);

  // Callback for main process
  useEffect(() => {
    window.ContextBridge.onNativeThemeChanged(() => setTheme(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
* Returns the current theme context object.
*
* @returns {ThemeContext} The current theme context object.
*/
export const useThemeContext = () => useContext(ThemeContext);
