import React from "react";
import { Link } from "react-router-dom";

// Inline SVG: Trading Platform Hero — chart lines on dark gradient
const HeroIllustration = () => (
  <svg viewBox="0 0 900 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", maxWidth: 820, margin: "0 auto", display: "block", borderRadius: 24 }}>
    <defs>
      <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0f1e" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="900" height="420" fill="url(#heroBg)" rx="24" />
    {/* Glow circles */}
    <circle cx="200" cy="200" r="160" fill="#1e40af" opacity="0.12" />
    <circle cx="700" cy="150" r="140" fill="#2563eb" opacity="0.1" />
    {/* Grid lines */}
    {[80, 160, 240, 320].map(y => <line key={y} x1="60" y1={y} x2="840" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
    {/* Chart area fill */}
    <polygon points="60,300 180,220 300,260 420,140 540,190 660,100 780,130 840,110 840,360 60,360" fill="url(#chartGrad)" />
    {/* Chart line (blue – main) */}
    <polyline points="60,300 180,220 300,260 420,140 540,190 660,100 780,130 840,110" fill="none" stroke="#3b82f6" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Secondary green trend line */}
    <polyline points="60,340 180,310 300,330 420,280 540,300 660,240 780,260 840,230" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 4" />
    {/* Data points */}
    {[[420,140],[660,100],[840,110]].map(([cx,cy],i) => (
      <g key={i}><circle cx={cx} cy={cy} r="7" fill="#3b82f6" /><circle cx={cx} cy={cy} r="12" fill="#3b82f6" opacity="0.25" /></g>
    ))}
    {/* Card overlay */}
    <rect x="600" y="240" width="210" height="110" rx="14" fill="rgba(30,58,138,0.6)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
    <text x="620" y="268" fill="#93c5fd" fontSize="11" fontFamily="'Inter', sans-serif" fontWeight="600">PORTFOLIO VALUE</text>
    <text x="620" y="296" fill="#ffffff" fontSize="24" fontFamily="'Inter', sans-serif" fontWeight="700">₹8,42,310</text>
    <text x="620" y="318" fill="#22c55e" fontSize="12" fontFamily="'Inter', sans-serif" fontWeight="600">▲ +12.4%  Today</text>
    <text x="620" y="338" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="'Inter', sans-serif">vs last month</text>
    {/* Ticker pills */}
    <rect x="60" y="30" width="90" height="32" rx="16" fill="rgba(37,99,235,0.25)" stroke="rgba(96,165,250,0.3)" strokeWidth="1" />
    <text x="105" y="51" fill="#93c5fd" fontSize="12" fontFamily="'Inter', sans-serif" fontWeight="700" textAnchor="middle">NIFTY 50</text>
    <rect x="165" y="30" width="100" height="32" rx="16" fill="rgba(34,197,94,0.18)" stroke="rgba(74,222,128,0.3)" strokeWidth="1" />
    <text x="215" y="51" fill="#4ade80" fontSize="12" fontFamily="'Inter', sans-serif" fontWeight="700" textAnchor="middle">▲ 24,532</text>
    <rect x="280" y="30" width="100" height="32" rx="16" fill="rgba(239,68,68,0.18)" stroke="rgba(252,165,165,0.3)" strokeWidth="1" />
    <text x="330" y="51" fill="#f87171" fontSize="12" fontFamily="'Inter', sans-serif" fontWeight="700" textAnchor="middle">▼ SENSEX</text>
    {/* Vantage logo text */}
    <text x="840" y="395" fill="rgba(255,255,255,0.2)" fontSize="13" fontFamily="'Inter', sans-serif" fontWeight="700" textAnchor="end">VANTAGE</text>
  </svg>
);

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <HeroIllustration />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link
          className="btn-vantage fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
          to="/signup"
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
