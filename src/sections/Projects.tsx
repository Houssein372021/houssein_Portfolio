import { useTranslation } from "react-i18next";
import { ArrowUpRight, Star, Folder } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projectTechs, projectLinks } from "@/data/portfolio";

const keys = ["orderhub", "beyrouthine", "sezaia", "caashpay"] as const;

export function Projects() {
  const { t } = useTranslation();
  type Item = { name: string; type: string; period: string; desc: string };
  const secondary = t("projects.secondary.items", { returnObjects: true }) as { name: string; desc: string }[];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t("projects.title")}</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("projects.subtitle")}</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {keys.map((k, i) => {
            const item = t(`projects.items.${k}`, { returnObjects: true }) as Item;
            const link = (projectLinks as Record<string, string | undefined>)[k];
            const featured = i < 2;
            return (
              <Reveal key={k} delay={i * 0.08}>
                <article className={`group relative h-full p-6 sm:p-8 rounded-2xl border bg-card transition-all hover:shadow-card-premium ${
                  featured ? "border-primary/40 hover:border-primary" : "border-border hover:border-primary/40"
                }`}>
                  {featured && (
                    <div className="absolute top-5 end-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-hero text-primary-foreground text-xs font-semibold shadow-glow">
                      <Star className="w-3 h-3" /> {t("projects.featured")}
                    </div>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Folder className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">{item.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{item.type}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.period}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{item.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {projectTechs[k].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      {t("projects.visit")} <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">{t("projects.secondary.title")}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {secondary.map((s, i) => (
                <div key={i} className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
