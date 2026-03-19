import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const removePreloader = () => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.remove();
};

if (document.readyState === "complete") {
  removePreloader();
} else {
  window.addEventListener("load", removePreloader, { once: true });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
