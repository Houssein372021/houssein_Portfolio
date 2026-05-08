import { useTranslation } from "@/i18n/sections";
import { MapPin, Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { experienceTechs } from "@/data/portfolio";
import sezaiaLogo from "@/assets/companies/sezaia_logo.jpg";
import caashpayLogo from "@/assets/companies/caashpay.svg";

type ExpItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

const companyLogos = [sezaiaLogo, caashpayLogo];

export function Experience() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true }) as ExpItem[];

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t("experience.title")}
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("experience.subtitle")}</h2>
        </Reveal>

        <div className="mt-14 relative">
          <div className="timeline-line hidden md:block absolute start-6 top-8 bottom-8 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-8">
            {items.map((exp, i) => (
              <Reveal key={exp.company} delay={i * 0.12} direction="right">
                <div className="relative md:ps-20">
                  <div className="hidden md:flex absolute start-0 top-8 w-12 h-12 rounded-2xl bg-card border border-border shadow-card-premium items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-105">
                    <img
                      src={companyLogos[i]}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <article className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card-premium transition-colors hover:border-primary/40">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-hero" />
                    <div className="p-5 sm:p-7">
                      <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[1fr_auto] lg:items-start">
                        <div className="flex items-start gap-4 min-w-0">
                          <div className="w-16 h-16 rounded-2xl border border-border bg-background flex items-center justify-center overflow-hidden shrink-0">
                            <img
                              src={companyLogos[i]}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-2xl font-bold leading-tight">{exp.company}</h3>
                            <p className="text-primary font-semibold mt-1">{exp.role}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground lg:min-w-44 lg:flex-col lg:items-end">
                          <span className="inline-flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="mt-6 space-y-3 text-muted-foreground">
                        {exp.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="grid grid-cols-[0.5rem_1fr] items-start gap-4 text-base leading-relaxed"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {experienceTechs[i].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
