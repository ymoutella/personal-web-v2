"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatBalloon() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ role: "assistant", content: t("chat.greeting") }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Sorry, something went wrong." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I couldn't connect. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-balloon"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: 200,
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--accent2))",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(0,255,157,0.3)",
          transition: "transform 0.2s",
          fontSize: "1.4rem",
        }}
        aria-label="Chat"
      >
        {isOpen ? (
          <span style={{ color: "#080b12", fontWeight: 700, fontSize: "1.2rem" }}>&times;</span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#080b12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "6rem",
            right: "2rem",
            zIndex: 200,
            width: 360,
            maxHeight: 480,
            background: "var(--bg2)",
            border: "0.5px solid var(--glass-border)",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "0.8rem 1rem",
              borderBottom: "0.5px solid var(--glass-border)",
              background: "rgba(255,255,255,0.03)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
              }}
            />
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--text-main)",
                fontWeight: 700,
              }}
            >
              {t("chat.title")}
            </span>
            <span
              style={{
                marginLeft: "auto",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                color: "var(--text-muted)",
              }}
            >
              Gemini AI
            </span>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
              minHeight: 200,
              maxHeight: 320,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                  padding: "0.6rem 0.8rem",
                  borderRadius:
                    msg.role === "user"
                      ? "10px 10px 2px 10px"
                      : "10px 10px 10px 2px",
                  background:
                    msg.role === "user"
                      ? "rgba(0,255,157,0.15)"
                      : "rgba(255,255,255,0.05)",
                  border: `0.5px solid ${
                    msg.role === "user"
                      ? "rgba(0,255,157,0.25)"
                      : "var(--glass-border)"
                  }`,
                  fontSize: "0.78rem",
                  lineHeight: 1.6,
                  color: "var(--text-main)",
                }}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div
                style={{
                  alignSelf: "flex-start",
                  padding: "0.6rem 0.8rem",
                  borderRadius: "10px 10px 10px 2px",
                  background: "rgba(255,255,255,0.05)",
                  border: "0.5px solid var(--glass-border)",
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                }}
              >
                ...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "0.8rem",
              borderTop: "0.5px solid var(--glass-border)",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder={t("chat.placeholder")}
              style={{
                flex: 1,
                padding: "0.5rem 0.8rem",
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid var(--glass-border)",
                borderRadius: "6px",
                color: "var(--text-main)",
                fontSize: "0.75rem",
                fontFamily: "'Space Mono', monospace",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.7rem",
                padding: "0.5rem 1rem",
                background: "var(--accent)",
                color: "#080b12",
                border: "none",
                borderRadius: "6px",
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: 700,
                opacity: loading ? 0.5 : 1,
              }}
            >
              {t("chat.send")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
