import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import App from "./App";
import NavigateProvider from "./contexts/NavigateContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NavigateProvider>
      <App />
    </NavigateProvider>
  </StrictMode>
);
