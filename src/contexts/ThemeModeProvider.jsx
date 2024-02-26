import { createContext, useContext, useEffect, useState } from 'react';

const ThemeModeContext = createContext();
const initialState = localStorage.getItem('theme') || 'light';

export default function ThemeModeProvider({ children }) {
  const [theme, setTheme] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeModeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export const useThemeMode = () => useContext(ThemeModeContext);
