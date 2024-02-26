import { useEffect, useState } from 'react';

export default function useThemeMode() {
  const initialState = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return { theme, setTheme };
}
