import React, { useState, useRef, useEffect } from "react";

const sentimentColor = (s = "") => {
  const lower = s.toLowerCase();
  if (lower.includes("positive") || lower.includes("bullish")) return "#22c55e";
  if (lower.includes("negative") || lower.includes("bearish")) return "#ef4444";
  return "#f59e0b";
};

const suggestionColor = (s = "") => {
  const lower = s.toLowerCase();
  if (lower === "buy") return { bg: "rgba(34,197,94,0.15)", color: "#22c55e", border: "rgba(34,197,94,0.4)" };
  if (lower === "sell") return { bg: "rgba(239,68,68,0.15)", color: "#ef4444", border: "rgba(239,68,68,0.4)" };
  return { bg: "rgba(245,158,11,0.15)", color: "#f59e0b", border: "rgba(245,158,11,0.4)" };
};

const AIAdvisorPanel = ({ isOpen, onClose, symbol }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen && symbol) {
      fetchAnalysis(symbol);
    }
    // eslint-disable-next-line
  }, [isOpen, symbol]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const fetchAnalysis = async (sym) => {
    setMessages([{ role: "user", text: `Analyze ${sym}` }]);
    setLoading(true);
    try {
      const ADVISOR = process.env.REACT_APP_STOCK_ADVISOR_URL || "https://stock-advisor-agent-1050263355461.asia-south1.run.app";
      const res = await fetch(`${ADVISOR}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symbol: sym }),
      });
      const data = await res.json();
      if (data.error) {
        setMessages((prev) => [...prev, { role: "ai", error: data.error }]);
      } else {
        setMessages((prev) => [...prev, { role: "ai", data }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", error: "❌ Could not reach the AI Advisor. Make sure the Python server is running on port 7321." },
      ]);
    }
    setLoading(false);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const sym = input.trim().toUpperCase();
    setInput("");
    fetchAnalysis(sym);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
        zIndex: 999, backdropFilter: "blur(3px)"
      }} onClick={onClose} />

      {/* Panel */}
      <div style={{
        position: "fixed", top: 0, right: 0, height: "100vh", width: "400px",
        background: "linear-gradient(160deg, rgba(5,10,28,0.98) 0%, rgba(8,18,45,0.98) 100%)",
        backdropFilter: "blur(28px)",
        borderLeft: "1px solid rgba(59,130,246,0.2)",
        boxShadow: "-20px 0 80px rgba(0,0,0,0.7), -1px 0 0 rgba(59,130,246,0.1)",
        zIndex: 1000, display: "flex", flexDirection: "column",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        animation: "slideIn 0.32s cubic-bezier(0.34,1.56,0.64,1)",
      }}>

        {/* Header */}
        <div style={{
          padding: "20px 20px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "rgba(255,255,255,0.02)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "linear-gradient(135deg, #1e3a8a, #2563eb)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, boxShadow: "0 0 16px rgba(37,99,235,0.5)",
            }}>✨</div>
            <div>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.95rem" }}>AI Stock Advisor</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                Powered by Gemini
              </div>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "50%", width: 32, height: 32, cursor: "pointer",
            color: "rgba(255,255,255,0.6)", fontSize: "1rem", display: "flex",
            alignItems: "center", justifyContent: "center", transition: "all 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.14)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
          >×</button>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 12 }}>
          {messages.length === 0 && !loading && (
            <div style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", marginTop: 40, fontSize: "0.85rem" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
              <div>Type a stock symbol below<br />to get AI analysis</div>
            </div>
          )}

          {messages.map((msg, i) => (
            <div key={i}>
              {msg.role === "user" && (
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div style={{
                    background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
                    color: "#fff", borderRadius: "18px 18px 4px 18px",
                    padding: "10px 16px", fontSize: "0.85rem", maxWidth: "75%",
                    boxShadow: "0 4px 15px rgba(37,99,235,0.35)",
                  }}>{msg.text}</div>
                </div>
              )}

              {msg.role === "ai" && msg.error && (
                <div style={{
                  background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)",
                  borderRadius: "4px 18px 18px 18px", padding: "12px 16px",
                  color: "#fca5a5", fontSize: "0.82rem",
                }}>{msg.error}</div>
              )}

              {msg.role === "ai" && msg.data && (() => {
                const d = msg.data;
                const sug = suggestionColor(d.suggestion);
                return (
                  <div style={{
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "4px 18px 18px 18px", padding: "16px",
                    backdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: 12,
                  }}>
                    {/* Suggestion pill */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{
                        background: sug.bg, color: sug.color,
                        border: `1px solid ${sug.border}`,
                        borderRadius: 999, padding: "4px 14px",
                        fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}>{d.suggestion}</span>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>
                        for {symbol}
                      </span>
                    </div>

                    {/* Overview */}
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Overview</div>
                      <div style={{ color: "rgba(255,255,255,0.82)", fontSize: "0.82rem", lineHeight: 1.5 }}>{d.company_overview}</div>
                    </div>

                    {/* Sentiment */}
                    <div style={{
                      background: "rgba(255,255,255,0.04)", borderRadius: 10,
                      padding: "10px 12px", border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex", alignItems: "flex-start", gap: 8,
                    }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: "50%", marginTop: 5,
                        background: sentimentColor(d.market_sentiment), flexShrink: 0,
                        boxShadow: `0 0 8px ${sentimentColor(d.market_sentiment)}`,
                      }} />
                      <div>
                        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>Market Sentiment</div>
                        <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.82rem", lineHeight: 1.5 }}>{d.market_sentiment}</div>
                      </div>
                    </div>

                    {/* Reasoning */}
                    <div>
                      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Reasoning</div>
                      <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem", lineHeight: 1.6 }}>{d.reasoning}</div>
                    </div>

                    {/* Disclaimer */}
                    <div style={{
                      background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)",
                      borderRadius: 8, padding: "8px 10px",
                      color: "rgba(245,158,11,0.7)", fontSize: "0.7rem", lineHeight: 1.5,
                    }}>⚠️ {d.disclaimer}</div>
                  </div>
                );
              })()}
            </div>
          ))}

          {loading && (
            <div style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px 18px 18px 18px", padding: "16px",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <div style={{ display: "flex", gap: 5 }}>
                {[0, 1, 2].map(n => (
                  <div key={n} style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: "#3b82f6", animation: `bounce 1.2s ${n * 0.2}s infinite ease-in-out`,
                  }} />
                ))}
              </div>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>Analyzing with Gemini...</span>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} style={{
          padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex", gap: 8, background: "rgba(255,255,255,0.02)",
        }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Type a symbol e.g. RELIANCE..."
            style={{
              flex: 1, background: "rgba(15,28,55,0.7)",
              border: "1px solid rgba(59,130,246,0.2)", borderRadius: 9999,
              padding: "10px 18px", color: "#f0f6ff", fontSize: "0.85rem",
              outline: "none", fontFamily: "inherit", transition: "all 0.2s",
            }}
            onFocus={e => { e.target.style.borderColor = "rgba(59,130,246,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(59,130,246,0.12)"; }}
            onBlur={e => { e.target.style.borderColor = "rgba(59,130,246,0.2)"; e.target.style.boxShadow = "none"; }}
          />
          <button type="submit" disabled={loading} style={{
            background: loading ? "rgba(37,99,235,0.25)" : "linear-gradient(135deg,#1d4ed8,#3b82f6)",
            border: "none", borderRadius: 999, width: 42, height: 42, cursor: loading ? "not-allowed" : "pointer",
            color: "#fff", fontSize: "1.1rem", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: loading ? "none" : "0 4px 18px rgba(37,99,235,0.5)",
            transition: "all 0.2s",
          }}>→</button>
        </form>
      </div>

      <style>{`
        @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
      `}</style>
    </>
  );
};

export default AIAdvisorPanel;

