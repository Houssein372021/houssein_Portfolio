import { useTranslation } from "react-i18next";
import { Rocket, Layers, Target, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { favoriteStack } from "@/data/portfolio";

const icons = [Rocket, Layers, Target, Zap];

type WhyItem = { title: string; desc: string };

export function Why() {
  const { t } = useTranslation();
  const items = t("why.items", { returnObjects: true }) as WhyItem[];

  return (
    <section className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t("why.title")}</p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold max-w-3xl">{t("why.subtitle")}</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div className="h-full p-6 rounded-2xl border border-border bg-card hover:border-primary/50 hover:-translate-y-1 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow mb-4">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg">{it.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">{t("stack.title")}</p>
            <h3 className="mt-2 text-2xl sm:text-4xl font-bold">{t("stack.subtitle")}</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {favoriteStack.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg border border-primary/30 bg-primary/5 text-primary font-medium text-sm">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="p-8 rounded-2xl bg-gradient-hero text-primary-foreground shadow-glow">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">{t("availability.title")}</p>
              <p className="mt-3 text-lg leading-relaxed">{t("availability.desc")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
