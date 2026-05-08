import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import appStylesHref from "./styles.css?url";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element #root not found");
}

function loadStylesheet(href: string) {
  return new Promise<void>((resolve) => {
    const existing = document.querySelector<HTMLLinkElement>(
      `link[rel="stylesheet"][href="${href}"]`,
    );

    if (existing) {
      existing.media = "all";
      resolve();
      return;
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.media = "print";
    link.onload = () => {
      link.media = "all";
      resolve();
    };
    link.onerror = () => resolve();
    document.head.appendChild(link);
  });
}

loadStylesheet(appStylesHref).then(() => {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
