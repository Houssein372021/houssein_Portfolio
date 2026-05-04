import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github, Linkedin, MapPin, Sparkles } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import { contactInfo } from "@/data/portfolio";

export function Hero() {
  const { t, i18n } = useTranslation();
  const cvHref = i18n.language === "en" ? "/cv/Houssein_Ghannoum_CV_EN.pdf" : "/cv/Houssein_Ghannoum_CV_FR.pdf";

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/3 -end-20 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 -start-20 w-[400px] h-[400px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border glass text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {t("hero.available")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05]"
          >
            {t("hero.name")}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-gradient"
          >
            {t("hero.title")}
          </motion.div>
          <p className="mt-2 text-lg text-muted-foreground font-medium">{t("hero.subtitle")}</p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            {t("hero.tagline1")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-hero text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              {t("hero.cta.projects")} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>
            <a
              href={cvHref}
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-border bg-card hover:border-primary transition-colors font-medium"
            >
              <Download className="w-4 h-4" /> {t("hero.cta.cv")}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg hover:bg-muted transition-colors font-medium"
            >
              <Mail className="w-4 h-4" /> {t("hero.cta.contact")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 flex items-center gap-5 text-muted-foreground"
          >
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin className="w-4 h-4" /> France
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 bg-gradient-hero rounded-3xl blur-2xl opacity-40" />
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-4 border-card shadow-glow">
            <img src={avatar} alt="Houssein GHANNOUM" width={512} height={512} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -end-4 glass border border-border rounded-2xl px-4 py-3 shadow-card-premium">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent" />
              Full-Stack Engineer
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
