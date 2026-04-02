"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  const expKeys = ["1", "2", "3", "4"];
  const experiences = expKeys.map((k) => ({
    date: t(`exp.${k}.date`),
    role: t(`exp.${k}.role`),
    company: t(`exp.${k}.company`),
    topics: t(`exp.${k}.desc`).split("\n"),
  }));

  return (
    <section
      id="experience"
      className="experience-section"
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
          {t("section.experience.label")}
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
          {t("section.experience.title")}
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="exp-item-row"
            style={{
              display: "grid",
              gridTemplateColumns: "180px 1fr",
              borderBottom: "0.5px solid var(--glass-border)",
              padding: "1.6rem 0",
              ...(i === 0
                ? { borderTop: "0.5px solid var(--glass-border)" }
                : {}),
            }}
          >
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                letterSpacing: "0.06em",
                paddingTop: "2px",
              }}
            >
              {exp.date}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--text-main)",
                  marginBottom: "0.2rem",
                }}
              >
                {exp.role}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent)",
                  marginBottom: "0.5rem",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                {exp.company}
              </div>
              <ul
                style={{
                  fontSize: "0.82rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.3rem",
                }}
              >
                {exp.topics.map((topic, j) => (
                  <li
                    key={j}
                    style={{
                      paddingLeft: "1rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--accent)",
                      }}
                    >
                      &rsaquo;
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
