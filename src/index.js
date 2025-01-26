import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Home from "./pages/home";
import { PlayContextDiv } from "./pages/navigate";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayContextDiv>
      <Home />
    </PlayContextDiv>
  </StrictMode>
);
