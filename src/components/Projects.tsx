"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="projects-section"
      style={{ position: "relative", zIndex: 1, padding: "4rem 3rem" }}
    >
      <div
        className="projects-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "2.4rem",
        }}
      >
        <div>
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
            {t("section.projects.label")}
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
            {t("section.projects.title")}
          </h2>
        </div>
        <a
          href="https://github.com/ymoutella"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.08em",
            color: "var(--text-muted)",
            background: "none",
            border: "none",
            borderBottom: "0.5px solid rgba(232,234,240,0.25)",
            paddingBottom: "2px",
            cursor: "pointer",
            transition: "color 0.2s",
            textDecoration: "none",
          }}
        >
          {t("section.projects.seeAll")}
        </a>
      </div>

      <div
        className="project-grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "1rem",
        }}
      >
        {/* Featured project */}
        <div
          className="project-card project-card-featured"
          style={{
            background: "var(--card-bg)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "0.5px solid var(--glass-border)",
            borderRadius: "12px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "border-color 0.25s, transform 0.25s",
            gridRow: "span 2",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, rgba(0,255,157,0.05), rgba(123,97,255,0.06), rgba(0,200,255,0.04))",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                zIndex: 2,
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                padding: "0.25rem 0.6rem",
                borderRadius: "3px",
                background: "rgba(0,255,157,0.12)",
                border: "0.5px solid rgba(0,255,157,0.3)",
                color: "var(--accent)",
              }}
            >
              {t("project.1.badge")}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="235 170 330 310"
              style={{
                maxWidth: "30%",
                maxHeight: "50%",
                zIndex: 1,
                padding: "2rem",
              }}
            >
              <polygon points="400,180 430,220 400,260 370,220" fill="#c62828" />
              <g fill="none" stroke="#e8eaf0" strokeWidth="10" strokeLinejoin="round">
                <path d="M250 360 L300 300 L350 360 L400 300 L450 360 L500 300 L550 360 L550 430 L250 430 Z" />
                <rect x="260" y="430" width="280" height="40" />
              </g>
            </svg>
          </div>
          <div
            style={{
              padding: "1.2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "0.4rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                }}
              >
                {t("project.1.cat")}
              </div>
              <div
                className="project-arrow"
                style={{
                  width: 28,
                  height: 28,
                  border: "0.5px solid var(--glass-border)",
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-muted)",
                  fontSize: "0.8rem",
                  flexShrink: 0,
                  transition: "all 0.2s",
                }}
              >
                &rarr;
              </div>
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text-main)",
                marginBottom: "0.4rem",
              }}
            >
              {t("project.1.name")}
            </div>
            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: "0.6rem",
              }}
            >
              {t("project.1.desc")}
            </div>
            <div
              style={{
                display: "flex",
                gap: "4px",
                flexWrap: "wrap",
              }}
            >
              {["Go", "React", "Cloud-Native", "Clean Arch"].map((s) => (
                <span key={s} className="stack-pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <ProjectCard
          num="02"
          cat={t("project.2.cat")}
          name={t("project.2.name")}
          stack={["Java", "Ninext", "Cloud-Native"]}
        />

        {/* Project 3 */}
        <ProjectCard
          num="03"
          cat={t("project.3.cat")}
          name={t("project.3.name")}
          stack={["Stay Tuned"]}
        />
      </div>
    </section>
  );
}

function ProjectCard({
  num,
  cat,
  name,
  stack,
}: {
  num: string;
  cat: string;
  name: string;
  stack: string[];
}) {
  return (
    <div
      className="project-card"
      style={{
        background: "var(--card-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "0.5px solid var(--glass-border)",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.25s, transform 0.25s",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "140px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, rgba(0,255,157,0.05), rgba(123,97,255,0.06), rgba(0,200,255,0.04))",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "4rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.04)",
          }}
        >
          {num}
        </div>
      </div>
      <div
        style={{
          padding: "1rem 1.2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "0.25rem",
            }}
          >
            {cat}
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "1rem",
              fontWeight: 700,
              color: "var(--text-main)",
            }}
          >
            {name}
          </div>
          <div
            style={{
              display: "flex",
              gap: "4px",
              marginTop: "0.4rem",
              flexWrap: "wrap",
            }}
          >
            {stack.map((s) => (
              <span key={s} className="stack-pill">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div
          className="project-arrow"
          style={{
            width: 28,
            height: 28,
            border: "0.5px solid var(--glass-border)",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            flexShrink: 0,
            transition: "all 0.2s",
          }}
        >
          &rarr;
        </div>
      </div>
    </div>
  );
}
