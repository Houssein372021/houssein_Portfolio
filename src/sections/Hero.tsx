import { useTranslation } from "react-i18next";
import type { CSSProperties } from "react";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import { contactInfo } from "@/data/contact";
import { withBasePath } from "@/lib/public-path";

const heroDelay = (delay: string) => ({ "--hero-delay": delay }) as CSSProperties;

export function Hero() {
  const { t, i18n } = useTranslation();
  const avatar = withBasePath("/avatar-portfolio.webp");
  const cvHref = withBasePath(
    i18n.language === "en" ? "/cv/Houssein_Ghannoum_CV_EN.pdf" : "/cv/Houssein_Ghannoum_CV_FR.pdf",
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 animated-grid opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <div>
          <div
            className="hero-enter inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border glass text-xs font-medium mb-6"
            style={heroDelay("0s")}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {t("hero.available")}
          </div>

          <h1
            style={heroDelay("0.1s")}
            className="hero-enter text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]"
          >
            {t("hero.name")}
          </h1>

          <div
            style={heroDelay("0.18s")}
            className="hero-enter mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-gradient"
          >
            {t("hero.title")}
          </div>
          <p className="mt-2 text-lg text-muted-foreground font-medium">{t("hero.subtitle")}</p>

          <p
            style={heroDelay("0.28s")}
            className="hero-enter mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {t("hero.tagline1")}
          </p>

          <div style={heroDelay("0.38s")} className="hero-enter mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              {t("hero.cta.projects")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
            <a
              href={cvHref}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary transition-colors font-medium"
            >
              <Download className="w-4 h-4" /> {t("hero.cta.cv")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
            >
              <Mail className="w-4 h-4" /> {t("hero.cta.contact")}
            </a>
          </div>

          <div
            style={heroDelay("0.48s")}
            className="hero-enter mt-8 flex items-center gap-5 text-muted-foreground"
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin className="w-4 h-4" /> France
            </span>
          </div>
        </div>

        <div style={heroDelay("0.22s")} className="hero-enter relative mx-auto">
          <div className="hero-avatar relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-card shadow-glow transition-transform duration-300 hover:scale-[1.04] hover:rotate-2">
            <img
              src={avatar}
              alt="Houssein GHANNOUM"
              width={384}
              height={384}
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            style={heroDelay("0.62s")}
            className="hero-enter absolute -bottom-4 -end-4 glass border border-border rounded-2xl px-4 py-3 shadow-card-premium"
          >
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              {t("hero.badge")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
