// ThemeProvider.jsx
import { ThemeProvider } from "next-themes";
import React from "react";

const NextJSThemes = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default NextJSThemes;
