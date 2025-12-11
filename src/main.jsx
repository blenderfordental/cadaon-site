import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";   // IMPORTANT: Tailwind entry point
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
