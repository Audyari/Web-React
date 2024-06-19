// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header--${theme}`}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
}

export default Header;