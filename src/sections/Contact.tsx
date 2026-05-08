import { useTranslation } from "@/i18n/sections";
import { Mail, Linkedin, Phone, MessageCircle, Download, Github } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { contactInfo } from "@/data/contact";
import { withBasePath } from "@/lib/public-path";

export function Contact() {
  const { t } = useTranslation();

  const buttons = [
    { icon: Mail, label: t("contact.email"), href: `mailto:${contactInfo.email}`, primary: true },
    { icon: Linkedin, label: t("contact.linkedin"), href: contactInfo.linkedin },
    { icon: Phone, label: t("contact.call"), href: `tel:${contactInfo.phone}` },
    {
      icon: MessageCircle,
      label: t("contact.whatsapp"),
      href: `https://wa.me/${contactInfo.whatsapp}`,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">
            {t("contact.title")}
          </p>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold">{t("contact.subtitle")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
              {contactInfo.email}
            </a>
            <span className="mx-3">•</span>
            <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
              {contactInfo.phoneDisplay}
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {buttons.map((b, i) => (
              <a
                key={i}
                href={b.href}
                target={b.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-medium transition-all hover:-translate-y-0.5 ${
                  b.primary
                    ? "bg-gradient-hero text-primary-foreground shadow-glow"
                    : "border border-border bg-card hover:border-primary"
                }`}
              >
                <b.icon className="w-4 h-4" /> {b.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={withBasePath("/cv/Houssein_Ghannoum_CV_FR.pdf")}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" /> {t("contact.cvFr")}
            </a>
            <a
              href={withBasePath("/cv/Houssein_Ghannoum_CV_EN.pdf")}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary transition-colors text-sm font-medium"
            >
              <Download className="w-4 h-4" /> {t("contact.cvEn")}
            </a>
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg hover:bg-muted text-sm font-medium"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
