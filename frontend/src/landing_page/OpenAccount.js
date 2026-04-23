import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5" style={{ color: "#f0f6ff", fontWeight: 700 }}>Open a Vantage account</h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "2rem" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 mb-5"
          style={{ 
            width: "25%", 
            margin: "0 auto",
            background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
            color: "#fff",
            border: "none",
            borderRadius: "9999px",
            padding: "16px",
            fontSize: "1.1rem",
            fontWeight: "600",
            boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
            transition: "all 0.2s ease"
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,99,235,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,99,235,0.35)"; }}
          onClick={() => window.location.href = '/signup'}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
