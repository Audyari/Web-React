// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`content--${theme}`}>
      <h2>Welcome to my app</h2>
      <p>This is the main content area.</p>
    </main>
  );
}

export default Content;