import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeStore({ children }) {
  const [theme, setTheme] = useState('light');

  const toggle = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      { children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeStore }