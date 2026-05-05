import { useTranslation } from "react-i18next";
import { ArrowUpRight, Star, Folder } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tilt } from "@/components/Tilt";
import { projectTechs, projectLinks } from "@/data/portfolio";
import orderHubLogo from "@/assets/projects/logo_orderhub_banner.png";
import laBeiruthineLogo from "@/assets/projects/logo_labeiruthine_banner.png";

const keys = ["orderhub", "beyrouthine", "sezaia", "caashpay"] as const;
type ProjectKey = (typeof keys)[number];

const projectLogos: Partial<Record<ProjectKey, { src: string; className: string }>> = {
  orderhub: {
    src: orderHubLogo,
    className: "object-contain",
  },
  beyrouthine: {
    src: laBeiruthineLogo,
    className: "object-contain",
  },
};

export function Projects() {
  const { t } = useTranslation();
  type Item = { name: string; type: string; period: string; desc: string };
  const secondary = t("projects.secondary.items", { returnObjects: true }) as {
    name: string;
    desc: string;
  }[];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t("projects.title")}
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("projects.subtitle")}</h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {keys.map((k, i) => {
            const item = t(`projects.items.${k}`, { returnObjects: true }) as Item;
            const link = (projectLinks as Record<string, string | undefined>)[k];
            const featured = i < 2;
            const logo = projectLogos[k];
            return (
              <Reveal key={k} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <Tilt className="h-full">
                  <article
                    className={`group relative h-full p-6 sm:p-8 rounded-2xl border bg-card card-hover overflow-hidden ${
                      featured
                        ? "border-primary/40 hover:border-primary hover:shadow-glow"
                        : "border-border hover:border-primary/40 hover:shadow-card-premium"
                    }`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute -inset-1 bg-gradient-hero opacity-10 blur-2xl" />
                    </div>
                    {featured && (
                      <div className="relative mb-4 flex justify-end">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gradient-hero text-primary-foreground text-xs font-semibold shadow-glow">
                          <Star className="w-3 h-3" /> {t("projects.featured")}
                        </span>
                      </div>
                    )}
                    {logo ? (
                      <div className="relative h-24 sm:h-28 rounded-xl border border-border bg-white overflow-hidden mb-5 p-3">
                        <img
                          src={logo.src}
                          alt={`${item.name} logo`}
                          className={`w-full h-full ${logo.className}`}
                        />
                      </div>
                    ) : (
                      <div className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-500">
                        <Folder className="w-5 h-5 text-primary" />
                      </div>
                    )}
                    <h3 className="relative text-xl sm:text-2xl font-bold">{item.name}</h3>
                    <p className="relative text-sm text-primary font-medium mt-1">{item.type}</p>
                    <p className="relative text-xs text-muted-foreground mt-1">{item.period}</p>
                    <p className="relative mt-4 text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {projectTechs[k].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-muted border border-border transition-all hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group/link"
                      >
                        <span className="underline-grow">{t("projects.visit")}</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </a>
                    )}
                  </article>
                </Tilt>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4">{t("projects.secondary.title")}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {secondary.map((s, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
                >
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
