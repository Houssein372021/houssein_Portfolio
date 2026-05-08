import { useTranslation } from "@/i18n/sections";
import { GraduationCap, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { withBasePath } from "@/lib/public-path";

type EduItem = { school: string; degree: string; period: string; location: string };
type LangItem = {
  name: string;
  level: string;
  certificateHref?: string;
  certificateLabel?: string;
};

export function Education() {
  const { t } = useTranslation();
  const items = t("education.items", { returnObjects: true }) as EduItem[];
  const langs = t("languages.items", { returnObjects: true }) as LangItem[];

  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[2fr_1fr] gap-12">
        <div>
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t("education.title")}
            </p>
            <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("education.subtitle")}</h2>
          </Reveal>
          <div className="mt-10 space-y-5">
            {items.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-gradient-hero flex items-center justify-center shadow-glow flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{e.school}</h3>
                      <p className="text-primary font-medium mt-1">{e.degree}</p>
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {e.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {e.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">
              {t("languages.title")}
            </p>
          </Reveal>
          <div className="mt-6 space-y-3">
            {langs.map((l, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="p-4 rounded-xl border border-border bg-card flex items-start justify-between gap-4">
                  <div>
                    <span className="font-semibold">{l.name}</span>
                    <p className="mt-1 text-sm text-muted-foreground">{l.level}</p>
                  </div>
                  {l.certificateHref ? (
                    <a
                      href={withBasePath(l.certificateHref)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
                    >
                      {l.certificateLabel}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
