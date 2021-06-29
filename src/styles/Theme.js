import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../context/ThemeStore";

import GlobalStyle from './GlobalStyle';

const themes = {
  light: {
    backgroundColor: '#F8F8F8',
    textColor: '#333',
    inputColor: '#F8F8F8',
    textInputColor: '#090C10',
  },

  dark: {
    backgroundColor: '#090C10',
    textColor: '#F8F8F8',
    inputColor: '#0D1117',
    textInputColor: '#F8F8F8',
  },
}

function Theme({ children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={themes[theme]}>
      { children}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default Theme;