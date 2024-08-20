import { useCallback, useEffect, useState } from 'react';

const useToggleTheme = () => {
  const getInitialTheme = () => {
    // Verifica el tema en localStorage o usa la preferencia del sistema
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return 'dark';
    } else {
      return 'light';
    }
  };

  const [theme, setTheme] = useState<string>(getInitialTheme);

  useEffect(() => {
    // Aplica el tema al DOM y guarda en localStorage
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  return [theme, toggleTheme] as const;
};

export default useToggleTheme;
