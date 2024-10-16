import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header.jsx";
import MainComponents from "./components/MainComponents.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainComponents />
  </StrictMode>
);
