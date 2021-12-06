import React, { useState, createContext, useContext } from "react";

enum MODES {
  DARK = "dark",
  LIGHT = "light",
}

const ThemeModeContext = createContext({
  themeMode: MODES.LIGHT,
  setThemeMode: (mode: MODES) => {},
});

export const App = () => {
  const [themeMode, setThemeMode] = useState(MODES.LIGHT);
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <Main />
    </ThemeModeContext.Provider>
  );
};

export const Main = () => {
  return (
    <div>
      <Settings />
    </div>
  );
};

export const Settings = () => {
  const { themeMode, setThemeMode } = useContext(ThemeModeContext);

  const toggleMode = React.useCallback(() => {
    setThemeMode(themeMode === MODES.DARK ? MODES.LIGHT : MODES.DARK);
  }, [themeMode, setThemeMode]);

  return <button onClick={toggleMode}>toggle light/dark mode</button>;
};
