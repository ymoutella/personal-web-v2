"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  const languages = [
    { value: "en" as const, label: "EN" },
    { value: "pt-BR" as const, label: "PT" },
  ];

  return (
    <nav
      className="nav-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 3rem",
        background: "rgba(8,11,18,0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "0.5px solid var(--glass-border)",
      }}
    >
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "1rem",
          fontWeight: 700,
          color: "var(--text-main)",
          letterSpacing: "-0.02em",
        }}
      >
        yure<span style={{ color: "var(--accent)" }}>.</span>dev
      </div>
      <ul
        className="nav-links-list"
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
        }}
      >
        {["projects", "skills", "experience"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.06em",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontFamily: "'Space Mono', monospace",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {t(`nav.${item}`)}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-actions" style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            border: "0.5px solid var(--accent2)",
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => setLocale(lang.value)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.72rem",
                padding: "0.5rem 0.8rem",
                background:
                  locale === lang.value
                    ? "rgba(123,97,255,0.25)"
                    : "transparent",
                border: "none",
                borderRight:
                  lang.value === "en"
                    ? "0.5px solid var(--accent2)"
                    : "none",
                color:
                  locale === lang.value
                    ? "var(--text-main)"
                    : "var(--text-muted)",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.06em",
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
        <a
          href="mailto:yure@ymoutella.com.br"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.72rem",
            padding: "0.5rem 1.2rem",
            background: "transparent",
            border: "0.5px solid var(--accent)",
            color: "var(--accent)",
            cursor: "pointer",
            borderRadius: "4px",
            transition: "all 0.2s",
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "rgba(0,255,157,0.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          {t("nav.contact")}
        </a>
      </div>
    </nav>
  );
}
