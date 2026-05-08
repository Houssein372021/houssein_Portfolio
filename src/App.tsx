import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { Footer } from "@/sections/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";

const About = lazy(() => import("@/sections/About").then((module) => ({ default: module.About })));
const Skills = lazy(() =>
  import("@/sections/Skills").then((module) => ({ default: module.Skills })),
);
const Experience = lazy(() =>
  import("@/sections/Experience").then((module) => ({ default: module.Experience })),
);
const Projects = lazy(() =>
  import("@/sections/Projects").then((module) => ({ default: module.Projects })),
);
const Education = lazy(() =>
  import("@/sections/Education").then((module) => ({ default: module.Education })),
);
const Why = lazy(() => import("@/sections/Why").then((module) => ({ default: module.Why })));
const Contact = lazy(() =>
  import("@/sections/Contact").then((module) => ({ default: module.Contact })),
);

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
          <ScrollProgress />
          <CursorGlow />
          <Navbar />
          <main>
            <Hero />
            <DeferredSection id="about" minHeight={680}>
              <About />
            </DeferredSection>
            <DeferredSection id="skills" minHeight={820}>
              <Skills />
            </DeferredSection>
            <DeferredSection id="experience" minHeight={980}>
              <Experience />
            </DeferredSection>
            <DeferredSection id="projects" minHeight={980}>
              <Projects />
            </DeferredSection>
            <DeferredSection id="education" minHeight={720}>
              <Education />
            </DeferredSection>
            <DeferredSection id="why" minHeight={900}>
              <Why />
            </DeferredSection>
            <DeferredSection id="contact" minHeight={560}>
              <Contact />
            </DeferredSection>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

function DeferredSection({
  id,
  minHeight,
  children,
}: {
  id: string;
  minHeight: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setActive(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px", threshold: 0.01 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  if (active) {
    return (
      <div style={{ minHeight }}>
        <Suspense fallback={<section id={id} style={{ minHeight }} />}>{children}</Suspense>
      </div>
    );
  }

  return <section id={id} ref={ref} aria-hidden="true" style={{ minHeight }} />;
}
