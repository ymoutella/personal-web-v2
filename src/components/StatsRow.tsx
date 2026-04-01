"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function StatsRow() {
  const { t } = useLanguage();

  const stats = [
    { number: "6", suffix: "yr", label: t("stats.exp") },
    { number: "10", suffix: "+", label: t("stats.projects") },
    { number: "50", suffix: "+", label: t("stats.integrations") },
    { number: "99", suffix: "%", label: t("stats.uptime") },
  ];

  return (
    <div
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        gap: 0,
        margin: "0 3rem 4rem",
        border: "0.5px solid var(--glass-border)",
        borderRadius: "10px",
        overflow: "hidden",
        background: "var(--glass-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            padding: "1.4rem 1.8rem",
            borderRight:
              i < stats.length - 1
                ? "0.5px solid var(--glass-border)"
                : "none",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "2rem",
              fontWeight: 700,
              color: "var(--text-main)",
              lineHeight: 1,
              marginBottom: "0.25rem",
            }}
          >
            {s.number}
            <span style={{ color: "var(--accent)", fontSize: "1.2rem" }}>
              {s.suffix}
            </span>
          </div>
          <div
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
