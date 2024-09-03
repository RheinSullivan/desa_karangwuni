// src/main.jsx atau src/index.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import NextJSThemes from "./components/NextJSThemes";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <NextJSThemes>
    <App />
  </NextJSThemes>,
);
