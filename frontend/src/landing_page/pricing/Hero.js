import React from "react";

// Pricing card icon — coin/zero for "Free"
const FreeEquityIcon = () => (
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, height: 140, margin: "0 auto", display: "block" }}>
    <defs>
      <linearGradient id="freeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <circle cx="80" cy="80" r="72" fill="url(#freeGrad)" opacity="0.15" />
    <circle cx="80" cy="80" r="58" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 4" />
    <text x="80" y="72" fill="#3b82f6" fontSize="42" fontFamily="'Inter',sans-serif" fontWeight="900" textAnchor="middle">₹0</text>
    <text x="80" y="98" fill="#93c5fd" fontSize="13" fontFamily="'Inter',sans-serif" fontWeight="600" textAnchor="middle">Brokerage</text>
    <text x="80" y="116" fill="rgba(255,255,255,0.35)" fontSize="11" fontFamily="'Inter',sans-serif" textAnchor="middle">Equity Delivery</text>
  </svg>
);

// Flat ₹20 icon
const FlatFeeIcon = () => (
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, height: 140, margin: "0 auto", display: "block" }}>
    <defs>
      <linearGradient id="flatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#065f46" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
    </defs>
    <circle cx="80" cy="80" r="72" fill="url(#flatGrad)" opacity="0.15" />
    <circle cx="80" cy="80" r="58" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="6 4" />
    <text x="80" y="68" fill="#22c55e" fontSize="32" fontFamily="'Inter',sans-serif" fontWeight="900" textAnchor="middle">₹20</text>
    <text x="80" y="92" fill="#86efac" fontSize="12" fontFamily="'Inter',sans-serif" fontWeight="600" textAnchor="middle">Flat Fee</text>
    <text x="80" y="110" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="'Inter',sans-serif" textAnchor="middle">Intraday &amp; F&amp;O</text>
    {/* Lightning bolt */}
    <polygon points="88,30 76,55 86,55 72,80 88,80 74,105 100,72 86,72 96,50 82,50" fill="#22c55e" opacity="0.55" transform="translate(0, 20) scale(0.5) translate(80,-20)" />
  </svg>
);

// Mutual Fund icon
const MFIcon = () => (
  <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, height: 140, margin: "0 auto", display: "block" }}>
    <defs>
      <linearGradient id="mfGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4c1d95" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
    <circle cx="80" cy="80" r="72" fill="url(#mfGrad)" opacity="0.15" />
    <circle cx="80" cy="80" r="58" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6 4" />
    {/* Bar chart inside */}
    <rect x="48" y="100" width="14" height="20" rx="3" fill="#8b5cf6" opacity="0.7" />
    <rect x="67" y="82" width="14" height="38" rx="3" fill="#8b5cf6" opacity="0.85" />
    <rect x="86" y="68" width="14" height="52" rx="3" fill="#8b5cf6" />
    <line x1="44" y1="120" x2="104" y2="120" stroke="#a78bfa" strokeWidth="1.5" />
    <text x="80" y="55" fill="#a78bfa" fontSize="12" fontFamily="'Inter',sans-serif" fontWeight="600" textAnchor="middle">Direct MF</text>
    <text x="80" y="142" fill="rgba(255,255,255,0.35)" fontSize="11" fontFamily="'Inter',sans-serif" textAnchor="middle">₹0 Commission</text>
  </svg>
);

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="mt-3 fs-5" style={{ color: "#cbd5e1" }}>
          Free equity investments and flat ₹20 intraday and F&amp;O trades
        </h3>
      </div>
      <div className="row p-5 mt-5 text-center">
        <div className="col-4 p-4">
          <FreeEquityIcon />
          <h1 className="fs-3 mt-3">Free equity delivery</h1>
          <p style={{ color: "#94a3b8" }}>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <FlatFeeIcon />
          <h1 className="fs-3 mt-3">Intraday and F&amp;O trades</h1>
          <p style={{ color: "#94a3b8" }}>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <MFIcon />
          <h1 className="fs-3 mt-3">Free direct MF</h1>
          <p style={{ color: "#94a3b8" }}>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
