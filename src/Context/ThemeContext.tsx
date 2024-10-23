import { createContext, useContext, useState, ReactNode } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

type ThemeContextType = {
  theme: typeof themes.light | typeof themes.dark;
  setTheme: (theme: typeof themes.light | typeof themes.dark) => void;
};

const initialState: ThemeContextType = {
  theme: themes.light,
  setTheme: () => {},
};

const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("Must be inside theme provider");
  }

  return context;
};

export default useTheme;
