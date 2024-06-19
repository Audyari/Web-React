// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeProvider } from './contexts/ThemeContext';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
