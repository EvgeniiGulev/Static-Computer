/**
 * Author: Evgenii Gulev
 * Description: This file serves as the entry point for the React application, rendering the root component into the DOM.
 * Date/Time: 2024-06-06
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Render the root component (App) into the DOM within a StrictMode component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
