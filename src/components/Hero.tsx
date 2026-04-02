"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "9rem 3rem 4rem",
      }}
    >
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          color: "var(--accent)",
          marginBottom: "1.4rem",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        {t("hero.eyebrow")}
        <span className="cursor-blink" />
      </div>

      <h1
        className="hero-title-text"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "clamp(2.2rem, 5.5vw, 4.8rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          color: "var(--text-main)",
          maxWidth: "780px",
          marginBottom: "1.4rem",
          letterSpacing: "-0.03em",
          whiteSpace: "pre-line",
        }}
      >
        {t("hero.title.1")}
        <span style={{ color: "var(--accent)" }}>{t("hero.title.h1")}</span>
        {t("hero.title.2")}
        <span style={{ color: "var(--accent2)" }}>{t("hero.title.h2")}</span>
        {t("hero.title.3")}
      </h1>

      <p
        className="hero-sub-text"
        style={{
          fontSize: "0.95rem",
          fontWeight: 300,
          color: "var(--text-muted)",
          maxWidth: "480px",
          lineHeight: 1.8,
          marginBottom: "1.2rem",
        }}
      >
        {t("hero.sub")}
      </p>

      <div
        className="hero-chips"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          maxWidth: "520px",
          marginBottom: "2.4rem",
        }}
      >
        {[
          [
            { label: "Java", color: "green" },
            { label: "Spring Boot", color: "green" },
            { label: "Go", color: "purple" },
            { label: "Gin", color: "purple" },
          ],
          [
            { label: "TypeScript", color: "blue" },
            { label: "NestJS", color: "blue" },
          ],
          [
            { label: "GCP", color: "lavender" },
            { label: "Cloud Run", color: "lavender" },
            { label: "VM Instances", color: "lavender" },
            { label: "GKE", color: "lavender" },
          ],
          [
            { label: "Kafka", color: "purple" },
            { label: "GitHub Actions", color: "lavender" },
          ],
          [
            { label: "Pega Platform", color: "green" },
          ],
        ].map((row, i) => (
          <div key={i} style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {row.map((c) => (
              <div key={c.label} className={`chip chip-${c.color}`}>
                {c.label}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="#projects"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.75rem",
            padding: "0.8rem 1.8rem",
            background: "var(--accent)",
            color: "#080b12",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
            fontWeight: 700,
            letterSpacing: "0.04em",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
        >
          {t("hero.btn.projects")}
        </a>
      </div>

      {/* Terminal card */}
      <div
        className="hero-terminal"
        style={{
          position: "absolute",
          right: "3rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: "280px",
          background: "var(--card-bg)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "0.5px solid var(--glass-border)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "0.6rem 1rem",
            background: "rgba(255,255,255,0.04)",
            borderBottom: "0.5px solid var(--glass-border)",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#ff5f57",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#febc2e",
            }}
          />
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#28c840",
            }}
          />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              color: "var(--text-muted)",
              marginLeft: "auto",
            }}
          >
            {t("terminal.title")}
          </span>
        </div>
        <div style={{ padding: "1rem" }}>
          <div className="code-line">
            <span className="c">{t("terminal.comment")}</span>
          </div>
          <div className="code-line">
            <span className="k">const</span> dev = {"{"}
          </div>
          <div className="code-line">
            &nbsp;&nbsp;role: <span className="s">{t("terminal.role")}</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;exp: <span className="s">{t("terminal.exp")}</span>,
          </div>
          <div className="code-line">&nbsp;&nbsp;stack: [</div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="s">{t("terminal.stack.1")}</span>,{" "}
            <span className="s">{t("terminal.stack.2")}</span>,
          </div>
          <div className="code-line">
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="s">{t("terminal.stack.3")}</span>,{" "}
            <span className="s">{t("terminal.stack.4")}</span>
          </div>
          <div className="code-line">&nbsp;&nbsp;],</div>
          <div className="code-line">
            &nbsp;&nbsp;available:{" "}
            <span className="f">{t("terminal.available")}</span>
          </div>
          <div className="code-line">{"}"}</div>
        </div>
      </div>
    </section>
  );
}
