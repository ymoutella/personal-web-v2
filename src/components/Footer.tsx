"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="footer-container"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "0.5px solid var(--glass-border)",
        padding: "1.8rem 3rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.9rem",
          fontWeight: 700,
          color: "var(--text-muted)",
        }}
      >
        yure.dev
      </div>
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.65rem",
          color: "var(--text-muted)",
        }}
      >
        {t("footer.copy")}
      </div>
      <ul
        style={{
          display: "flex",
          gap: "1.4rem",
          listStyle: "none",
        }}
      >
        {[
          { label: "GitHub", href: "https://github.com/ymoutella" },
          {
            label: "LinkedIn",
            href: "https://linkedin.com/in/ymoutella",
          },
        ].map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
