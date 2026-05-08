import { useTranslation } from "react-i18next";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactInfo } from "@/data/contact";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {year} Houssein GHANNOUM. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="hover:text-foreground"
            aria-label={`Email ${contactInfo.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
