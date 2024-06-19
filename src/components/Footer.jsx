// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer--${theme}`}>
      <p>&copy; 2023 My App</p>
    </footer>
  );
}

export default Footer;