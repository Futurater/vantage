import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const VantageLogo = () => (
  <svg viewBox="0 0 148 38" xmlns="http://www.w3.org/2000/svg" style={{ height: 36, width: "auto" }}>
    <defs>
      <linearGradient id="nlg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1d4ed8" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
    <polygon points="2,6 13,6 19,26 25,6 36,6 19,36" fill="url(#nlg)" />
    <text x="43" y="28" fill="#f0f6ff" fontSize="19" fontFamily="'Inter','Segoe UI',sans-serif" fontWeight="800" letterSpacing="-0.4">VANTAGE</text>
  </svg>
);

const navLinks = [
  { to: "/signup", label: "Signup" },
  { to: "/about", label: "About" },
  { to: "/product", label: "Products" },
  { to: "/pricing", label: "Pricing" },
  { to: "/support", label: "Support" },
];

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      backgroundColor: "rgba(5, 10, 22, 0.88)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
      boxShadow: "0 1px 30px rgba(0,0,0,0.4)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 32px",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <VantageLogo />
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {navLinks.filter(l => l.to !== "/signup").map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                textDecoration: "none",
                padding: "8px 16px",
                borderRadius: 9999,
                fontSize: "0.9rem",
                fontWeight: 500,
                color: location.pathname === to ? "#60a5fa" : "rgba(148, 163, 184, 0.85)",
                background: location.pathname === to ? "rgba(37,99,235,0.08)" : "transparent",
                transition: "all 0.18s",
                fontFamily: "'Inter','Segoe UI',sans-serif",
              }}
              onMouseEnter={e => {
                if (location.pathname !== to) {
                  e.currentTarget.style.color = "#60a5fa";
                  e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                }
              }}
              onMouseLeave={e => {
                if (location.pathname !== to) {
                  e.currentTarget.style.color = "rgba(148, 163, 184, 0.85)";
                  e.currentTarget.style.background = "transparent";
                }
              }}
            >
              {label}
            </Link>
          ))}

          <div style={{ width: 1, height: 24, background: "rgba(255,255,255,0.1)", margin: "0 8px" }} />

          <Link
            to="/login"
            style={{
              textDecoration: "none",
              padding: "8px 20px",
              borderRadius: 9999,
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#1d4ed8",
              border: "1.5px solid #bfdbfe",
              background: "transparent",
              transition: "all 0.18s",
              fontFamily: "'Inter','Segoe UI',sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,99,235,0.06)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
          >
            Login
          </Link>

          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              padding: "9px 22px",
              borderRadius: 9999,
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#ffffff",
              background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
              boxShadow: "0 3px 14px rgba(37,99,235,0.35)",
              transition: "all 0.18s",
              fontFamily: "'Inter','Segoe UI',sans-serif",
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 5px 20px rgba(37,99,235,0.5)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 3px 14px rgba(37,99,235,0.35)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            Open Account
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
