import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Houssein GHANNOUM - Developpeur Full-Stack Java / React" },
      {
        name: "description",
        content:
          "Portfolio de Houssein GHANNOUM, ingenieur logiciel et developpeur Full-Stack Java / React. Disponible pour CDI, freelance et missions en France.",
      },
      { property: "og:title", content: "Houssein GHANNOUM - Full-Stack Java / React" },
      {
        property: "og:description",
        content: "Ingenieur logiciel specialise Java Spring Boot, React, Python, Docker et CI/CD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
