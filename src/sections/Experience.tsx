import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { experienceTechs } from "@/data/portfolio";

type ExpItem = { company: string; role: string; period: string; location: string; bullets: string[] };

export function Experience() {
  const { t } = useTranslation();
  const items = t("experience.items", { returnObjects: true }) as ExpItem[];

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t("experience.title")}</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("experience.subtitle")}</h2>
        </Reveal>

        <div className="mt-14 relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute start-4 sm:start-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent"
          />
          <div className="space-y-10">
            {items.map((exp, i) => (
              <Reveal key={i} delay={i * 0.12} direction="right">
                <div className="relative ps-12 sm:ps-20 group">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute start-0 sm:start-2 top-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-hero flex items-center justify-center shadow-glow"
                  >
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </motion.div>
                  <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card card-hover hover:border-primary/40 hover:shadow-card-premium">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">{exp.company}</h3>
                        <p className="text-primary font-medium mt-1">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-end text-sm text-muted-foreground gap-1">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.period}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                      </div>
                    </div>
                    <ul className="mt-5 space-y-2 text-muted-foreground">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-primary mt-2">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experienceTechs[i].map((tech) => (
                        <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
