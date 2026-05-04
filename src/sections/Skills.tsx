import { useTranslation } from "react-i18next";
import { Code2, Layout, Server, Database, Smartphone, Cloud, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/data/portfolio";

const categories = [
  { key: "lang", icon: Code2, items: skills.lang },
  { key: "front", icon: Layout, items: skills.front },
  { key: "back", icon: Server, items: skills.back },
  { key: "db", icon: Database, items: skills.db },
  { key: "mobile", icon: Smartphone, items: skills.mobile },
  { key: "devops", icon: Cloud, items: skills.devops },
  { key: "tools", icon: Wrench, items: skills.tools },
] as const;

export function Skills() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t("skills.title")}</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("skills.subtitle")}</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.05}>
              <div className="group h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:shadow-card-premium transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center shadow-glow">
                    <c.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg">{t(`skills.cats.${c.key}`)}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((s) => (
                    <span key={s} className="px-3 py-1 text-sm rounded-md bg-muted border border-border font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
