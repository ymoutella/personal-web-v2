"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    { icon: t("skill.1.icon"), name: t("skill.1.name"), desc: t("skill.1.desc") },
    { icon: t("skill.2.icon"), name: t("skill.2.name"), desc: t("skill.2.desc") },
    { icon: t("skill.3.icon"), name: t("skill.3.name"), desc: t("skill.3.desc") },
  ];

  return (
    <section
      id="skills"
      style={{ position: "relative", zIndex: 1, padding: "0 3rem 4rem" }}
    >
      <div style={{ marginBottom: "2.4rem" }}>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "0.4rem",
          }}
        >
          {t("section.skills.label")}
        </div>
        <h2
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "1.8rem",
            fontWeight: 700,
            color: "var(--text-main)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {t("section.skills.title")}
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--glass-border)",
          border: "0.5px solid var(--glass-border)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {skills.map((s, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg2)",
              padding: "1.8rem",
              transition: "background 0.2s",
            }}
          >
            <div
              className="skill-icon"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--accent)",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {s.icon}
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-main)",
                marginBottom: "0.6rem",
              }}
            >
              {s.name}
            </div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              {s.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
