import React from "react";
import { Link } from "react-router-dom";

// Partner/product app icon — abstract branded tile
const PartnerTile = ({ label, color, icon }) => (
  <svg viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 14 }}>
    <defs>
      <linearGradient id={`ptg-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0f1e" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
    </defs>
    <rect width="160" height="140" fill={`url(#ptg-${label})`} rx="14" />
    <rect x="8" y="8" width="144" height="124" fill="none" stroke={color} strokeWidth="1" rx="10" opacity="0.3" />
    <text x="80" y="68" fontSize="36" fill={color} textAnchor="middle" fontFamily="sans-serif">{icon}</text>
    <text x="80" y="95" fill="#ffffff" fontSize="13" fontFamily="'Inter',sans-serif" fontWeight="700" textAnchor="middle">{label}</text>
    <text x="80" y="112" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'Inter',sans-serif" textAnchor="middle">Partner Platform</text>
  </svg>
);

const partners = [
  { label: "Smallcase", color: "#22c55e", icon: "📦" },
  { label: "Sensibull", color: "#f59e0b", icon: "📊" },
  { label: "Goldbees", color: "#fbbf24", icon: "🥇" },
  { label: "Streak", color: "#8b5cf6", icon: "⚡" },
  { label: "Kuvera", color: "#3b82f6", icon: "🌐" },
  { label: "LearnApp", color: "#ef4444", icon: "📚" },
];

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Vantage Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {partners.map((p) => (
          <div className="col-4 p-3 mt-5" key={p.label}>
            <PartnerTile {...p} />
            <p className="text-small text-muted mt-2">{p.label}</p>
          </div>
        ))}

        <Link
          className="btn-vantage fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
          to="/signup"
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Universe;
