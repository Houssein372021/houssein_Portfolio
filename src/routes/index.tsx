import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Education } from "@/sections/Education";
import { Why } from "@/sections/Why";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Houssein GHANNOUM — Développeur Full-Stack Java / React" },
      {
        name: "description",
        content:
          "Portfolio de Houssein GHANNOUM, ingénieur logiciel et développeur Full-Stack Java / React. Disponible pour CDI, freelance et missions en France.",
      },
      { property: "og:title", content: "Houssein GHANNOUM — Full-Stack Java / React" },
      {
        property: "og:description",
        content: "Ingénieur logiciel spécialisé Java Spring Boot, React, Python, Docker et CI/CD.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Why />
            <Contact />
          </motion.main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
