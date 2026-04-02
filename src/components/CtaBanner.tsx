"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function CtaBanner() {
  const { t } = useLanguage();

  return (
    <div
      className="cta-banner-container"
      style={{
        position: "relative",
        zIndex: 1,
        margin: "0 3rem 4rem",
        padding: "3.5rem",
        background:
          "linear-gradient(135deg, rgba(0,255,157,0.06), rgba(123,97,255,0.06))",
        border: "0.5px solid rgba(0,255,157,0.2)",
        borderRadius: "14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -40,
          top: -60,
          width: 260,
          height: 260,
          borderRadius: "50%",
          border: "0.5px solid rgba(0,255,157,0.07)",
        }}
      />
      <div>
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "var(--text-main)",
            lineHeight: 1.3,
            whiteSpace: "pre-line",
          }}
        >
          {t("cta.title.1")}
          <span style={{ color: "var(--accent)" }}>{t("cta.title.2")}</span>
        </div>
        <div
          style={{
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            marginTop: "0.4rem",
          }}
        >
          {t("cta.sub")}
        </div>
      </div>
      <a
        href="mailto:yure@ymoutella.com.br"
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
          position: "relative",
          zIndex: 1,
          whiteSpace: "nowrap",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
      >
        {t("cta.btn")}
      </a>
    </div>
  );
}
