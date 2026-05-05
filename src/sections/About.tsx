import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function About() {
  const { t } = useTranslation();
  const points = t("about.points", { returnObjects: true }) as string[];

  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t("about.title")}
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("about.subtitle")}</h2>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid gap-3">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-md bg-primary/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{p}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
