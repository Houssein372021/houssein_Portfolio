import { useEffect, useState, createContext, useContext, type ReactNode } from "react";

type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "theme";
const THEME_USER_SET_KEY = "theme-user-set";

const isTheme = (value: string | null): value is Theme => value === "light" || value === "dark";

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const wasChangedByUser = localStorage.getItem(THEME_USER_SET_KEY) === "true";
    setTheme(wasChangedByUser && isTheme(stored) ? stored : "light");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      localStorage.setItem(THEME_USER_SET_KEY, "true");
      return nextTheme;
    });
  };

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
