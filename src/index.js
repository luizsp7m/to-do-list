import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeStore } from './context/ThemeStore';
import Theme from './styles/Theme';

import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeStore>
      <Theme>
        <Home />
      </Theme>
    </ThemeStore>
  </React.StrictMode>,
  document.getElementById('root')
);
