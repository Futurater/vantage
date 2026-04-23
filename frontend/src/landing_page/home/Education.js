import React from "react";

// Open book / education illustration
const EducationIllustration = () => (
  <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" style={{ width: "70%", borderRadius: 16 }}>
    <defs>
      <linearGradient id="eduBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0f1e" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
    </defs>
    <rect width="460" height="360" fill="url(#eduBg)" rx="16" />
    {/* Open book shape */}
    <path d="M230 90 C180 80 100 95 60 115 L60 280 C100 260 180 248 230 258 Z" fill="#1e3a8a" opacity="0.8" />
    <path d="M230 90 C280 80 360 95 400 115 L400 280 C360 260 280 248 230 258 Z" fill="#1d4ed8" opacity="0.8" />
    {/* Book spine */}
    <rect x="226" y="88" width="8" height="172" fill="#60a5fa" rx="4" />
    {/* Lines on left page */}
    {[140,160,180,200,220,240].map(y => (
      <line key={y} x1="80" y1={y} x2="210" y2={y - 8} stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    ))}
    {/* Lines on right page */}
    {[140,160,180,200,220,240].map(y => (
      <line key={y} x1="250" y1={y - 8} x2="380" y2={y} stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
    ))}
    {/* Graduation cap */}
    <polygon points="230,30 180,55 230,70 280,55" fill="#3b82f6" />
    <rect x="218" y="68" width="24" height="6" fill="#3b82f6" />
    <line x1="280" y1="55" x2="280" y2="80" stroke="#60a5fa" strokeWidth="2.5" />
    <circle cx="280" cy="83" r="5" fill="#60a5fa" />
    {/* Small chart on right page */}
    <polyline points="255,230 275,210 295,220 315,190 335,200 355,175" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
    <text x="230" y="310" fill="rgba(255,255,255,0.6)" fontSize="13" fontFamily="'Inter',sans-serif" textAnchor="middle" fontWeight="600">Varsity by Vantage</text>
    <text x="230" y="330" fill="rgba(255,255,255,0.3)" fontSize="10" fontFamily="'Inter',sans-serif" textAnchor="middle">Free market education for everyone</text>
  </svg>
);

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <EducationIllustration />
        </div>
        <div className="col-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/product" style={{ textDecoration: "none" }}>
            Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/support" style={{ textDecoration: "none" }}>
            TradingQ&amp;A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
