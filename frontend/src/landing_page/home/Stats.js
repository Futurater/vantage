import React from "react";

// Ecosystem / network illustration
const EcosystemIllustration = () => (
  <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg" style={{ width: "90%", borderRadius: 16 }}>
    <defs>
      <linearGradient id="ecoBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0f1e" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
    </defs>
    <rect width="500" height="400" fill="url(#ecoBg)" rx="16" />
    {/* Connection lines */}
    {[[250,200,100,100],[250,200,400,100],[250,200,80,300],[250,200,420,300],[250,200,250,340]].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(59,130,246,0.3)" strokeWidth="2" strokeDasharray="5 4" />
    ))}
    {/* Center node */}
    <circle cx="250" cy="200" r="48" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
    <text x="250" y="196" fill="#fff" fontSize="14" fontFamily="'Inter',sans-serif" fontWeight="700" textAnchor="middle">VANTAGE</text>
    <text x="250" y="213" fill="#93c5fd" fontSize="10" fontFamily="'Inter',sans-serif" textAnchor="middle">Platform</text>
    {/* Satellite nodes */}
    {[
      [100, 100, "#22c55e", "Stocks"],
      [400, 100, "#f59e0b", "F&O"],
      [80,  300, "#8b5cf6", "MF"],
      [420, 300, "#ef4444", "IPO"],
      [250, 340, "#60a5fa", "Bonds"],
    ].map(([cx, cy, color, label]) => (
      <g key={label}>
        <circle cx={cx} cy={cy} r="30" fill={color} opacity="0.2" stroke={color} strokeWidth="1.5" />
        <text x={cx} y={cy+5} fill="#ffffff" fontSize="11" fontFamily="'Inter',sans-serif" fontWeight="600" textAnchor="middle">{label}</text>
      </g>
    ))}
    <text x="250" y="385" fill="rgba(255,255,255,0.2)" fontSize="11" fontFamily="'Inter',sans-serif" textAnchor="middle">30+ partner platforms</text>
  </svg>
);

function Stats() {
  return (
    <div className="container p-3">
      <div className="row py-4">
        <div className="col-6 pe-4">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Vantage with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Vantage universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 ps-4">
          <EcosystemIllustration />
          <div className="text-center">
            <a href="/product" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="/product" style={{ textDecoration: "none" }}>
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
