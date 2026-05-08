import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  Database,
  ExternalLink,
  Folder,
  Laptop,
  Mail,
  MousePointerClick,
  QrCode,
  Server,
  Star,
  Smartphone,
  UploadCloud,
  X,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Tilt } from "@/components/Tilt";
import {
  projectDetails,
  projectKeys,
  projectLinks,
  projectTechs,
  type ProjectArchitecture,
  type ProjectDetail,
  type ProjectDetailSection,
  type ProjectKey,
} from "@/data/portfolio";
import orderHubLogo from "@/assets/projects/logo_orderhub_banner.png";
import laBeiruthineLogo from "@/assets/projects/logo_labeiruthine_banner.png";
import assistByScanLogo from "@/assets/projects/assistbyscan_qr_logo.svg";

const keys = projectKeys;

const projectLogos: Partial<Record<ProjectKey, { src: string; className: string }>> = {
  orderhub: {
    src: orderHubLogo,
    className: "object-contain",
  },
  beyrouthine: {
    src: laBeiruthineLogo,
    className: "object-contain",
  },
  sezaia: {
    src: assistByScanLogo,
    className: "object-contain",
  },
};

const projectImages: Partial<Record<ProjectKey, { src: string; alt: string }>> = {
  sezaia: {
    src: assistByScanLogo,
    alt: "AssistByScan QR code logo",
  },
};

export function Projects() {
  const { t, i18n } = useTranslation();
  const [selectedKey, setSelectedKey] = useState<ProjectKey | null>(null);
  type Item = { name: string; type: string; period: string; desc: string };
  const secondary = t("projects.secondary.items", { returnObjects: true }) as {
    name: string;
    desc: string;
  }[];
  const currentLanguage = i18n.language.startsWith("en") ? "en" : "fr";
  const selectedDetail = selectedKey ? projectDetails[currentLanguage][selectedKey] : null;

  useEffect(() => {
    if (!selectedKey) return;

    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedKey(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedKey]);

  const openProject = (key: ProjectKey) => {
    setSelectedKey(key);
  };

  const openProjectFromKeyboard = (event: React.KeyboardEvent<HTMLElement>, key: ProjectKey) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(key);
    }
  };

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
                    role="button"
                    tabIndex={0}
                    aria-label={`${t("projects.openDetails")}: ${item.name}`}
                    onClick={() => openProject(k)}
                    onKeyDown={(event) => openProjectFromKeyboard(event, k)}
                    className={`group relative h-full p-6 sm:p-8 rounded-2xl border bg-card card-hover overflow-hidden ${
                      featured
                        ? "border-primary/40 hover:border-primary hover:shadow-glow"
                        : "border-border hover:border-primary/40 hover:shadow-card-premium"
                    } cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
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
                    <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        <MousePointerClick className="w-4 h-4" />
                        <span className="underline-grow">{t("projects.detailsCta")}</span>
                      </span>
                      {link && (
                        <a
                          href={link}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          onKeyDown={(event) => event.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors group/link"
                        >
                          <span className="underline-grow">{t("projects.visit")}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                        </a>
                      )}
                    </div>
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

      {selectedKey && selectedDetail && (
        <ProjectDetailDialog
          detail={selectedDetail}
          link={projectLinks[selectedKey]}
          image={projectImages[selectedKey]}
          caseStudyLabel={t("projects.caseStudy")}
          closeLabel={t("projects.closeDetails")}
          visitLabel={t("projects.visit")}
          onClose={() => setSelectedKey(null)}
        />
      )}
    </section>
  );
}

function ProjectDetailDialog({
  detail,
  link,
  image,
  caseStudyLabel,
  closeLabel,
  visitLabel,
  onClose,
}: {
  detail: ProjectDetail;
  link?: string;
  image?: { src: string; alt: string };
  caseStudyLabel: string;
  closeLabel: string;
  visitLabel: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-background/90 px-4 py-5 backdrop-blur-md sm:py-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-detail-title"
      onClick={onClose}
    >
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-card-premium"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 border-b border-border bg-card/95 px-5 py-5 backdrop-blur sm:px-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {caseStudyLabel}
              </p>
              <h2 id="project-detail-title" className="mt-2 text-2xl font-bold sm:text-4xl">
                {detail.title}
              </h2>
              <p className="mt-2 max-w-3xl text-sm font-medium text-muted-foreground sm:text-base">
                {detail.subtitle}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted/60 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={closeLabel}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="space-y-10 px-5 py-6 sm:px-8 sm:py-8">
          <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary">{detail.eyebrow}</p>
              {detail.intro.map((paragraph) => (
                <p key={paragraph} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalLink className="h-4 w-4" />
                  {visitLabel}
                </a>
              )}
            </div>

            <aside className="rounded-xl bg-muted/50 p-5">
              {image && (
                <div className="mb-5 overflow-hidden rounded-xl border border-border bg-white p-4">
                  <img src={image.src} alt={image.alt} className="mx-auto h-auto w-full max-w-xs" />
                </div>
              )}
              <h3 className="text-base font-bold">Technologies</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {detail.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </aside>
          </section>

          {detail.sections.map((section) => (
            <ProjectDetailSectionView key={section.title} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectDetailSectionView({ section }: { section: ProjectDetailSection }) {
  return (
    <section className="border-t border-border pt-8">
      <h3 className="text-2xl font-bold">{section.title}</h3>

      {section.body && (
        <div className="mt-4 space-y-3">
          {section.body.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {section.architecture && <ArchitectureFlow architecture={section.architecture} />}

      {section.items && <DetailList items={section.items} />}

      {section.columns && (
        <div
          className={`mt-5 grid gap-4 ${
            section.columns.length === 1 ? "md:grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          {section.columns.map((column) => (
            <div key={column.title} className="rounded-xl bg-muted/50 p-5">
              <h4 className="font-bold">{column.title}</h4>
              <DetailList items={column.items} compact />
            </div>
          ))}
        </div>
      )}

      {section.blocks && (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {section.blocks.map((block) => (
            <article key={block.title} className="rounded-xl bg-muted/50 p-5">
              <h4 className="font-bold">{block.title}</h4>
              {block.body && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.body}</p>
              )}
              {block.items && <DetailList items={block.items} compact />}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function ArchitectureFlow({ architecture }: { architecture: ProjectArchitecture }) {
  const serviceIcons = [Bell, Mail, UploadCloud, QrCode];

  return (
    <div className="mt-5 rounded-xl border border-border bg-muted/40 p-4 sm:p-5">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {architecture.inputsLabel}
          </p>
          <div className="mt-3 grid gap-3">
            {architecture.sources.map((source, index) => (
              <ArchitectureNode
                key={source}
                icon={index === 0 ? Laptop : Smartphone}
                title={source}
                compact
              />
            ))}
          </div>
        </div>

        <ArchitectureArrow />

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {architecture.backendLabel}
          </p>
          <ArchitectureNode icon={Server} title={architecture.backend} featured className="mt-3" />
        </div>

        <ArchitectureArrow />

        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {architecture.databaseLabel}
          </p>
          <ArchitectureNode icon={Database} title={architecture.database} className="mt-3" />
        </div>
      </div>

      <div className="mt-5 border-t border-border pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {architecture.servicesLabel}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {architecture.services.map((service, index) => (
            <ArchitectureNode
              key={service}
              icon={serviceIcons[index] ?? CheckCircle2}
              title={service}
              compact
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ArchitectureArrow() {
  return (
    <div
      className="hidden h-full items-center justify-center text-primary/70 lg:flex"
      aria-hidden="true"
    >
      <ArrowRight className="h-6 w-6" />
    </div>
  );
}

function ArchitectureNode({
  icon: Icon,
  title,
  compact = false,
  featured = false,
  className = "",
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  compact?: boolean;
  featured?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-16 items-center gap-3 rounded-xl border p-4 ${
        featured
          ? "border-primary/35 bg-primary/10 text-foreground"
          : "border-border bg-card text-muted-foreground"
      } ${className}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md ${
          featured ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className={`font-semibold leading-snug ${compact ? "text-sm" : "text-base"}`}>
        {title}
      </span>
    </div>
  );
}

function DetailList({ items, compact = false }: { items: string[]; compact?: boolean }) {
  return (
    <ul className={`mt-4 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
