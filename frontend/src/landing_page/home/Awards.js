import React from "react";

// Doughnut-style "broker stats" illustration
const BrokerIllustration = () => (
  <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 16 }}>
    <defs>
      <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0a0f1e" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
    </defs>
    <rect width="520" height="420" fill="url(#bg2)" rx="16" />
    {/* Donut chart segments */}
    <circle cx="260" cy="200" r="120" fill="none" stroke="#1e3a8a" strokeWidth="50" />
    <circle cx="260" cy="200" r="120" fill="none" stroke="#3b82f6" strokeWidth="50"
      strokeDasharray="188 565" strokeDashoffset="0" />
    <circle cx="260" cy="200" r="120" fill="none" stroke="#22c55e" strokeWidth="50"
      strokeDasharray="113 565" strokeDashoffset="-188" />
    <circle cx="260" cy="200" r="120" fill="none" stroke="#f59e0b" strokeWidth="50"
      strokeDasharray="94 565" strokeDashoffset="-301" />
    <circle cx="260" cy="200" r="120" fill="none" stroke="#8b5cf6" strokeWidth="50"
      strokeDasharray="75 565" strokeDashoffset="-395" />
    {/* Center text */}
    <circle cx="260" cy="200" r="72" fill="#0a0f1e" />
    <text x="260" y="192" fill="#ffffff" fontSize="22" fontFamily="'Inter',sans-serif" fontWeight="700" textAnchor="middle">15%</text>
    <text x="260" y="212" fill="#93c5fd" fontSize="11" fontFamily="'Inter',sans-serif" textAnchor="middle">Market Share</text>
    {/* Legend */}
    {[
      ["#3b82f6","Stocks & IPOs","33%"],
      ["#22c55e","Mutual Funds","20%"],
      ["#f59e0b","F&O","17%"],
      ["#8b5cf6","Commodities","13%"],
    ].map(([color, label, pct], i) => (
      <g key={i} transform={`translate(30, ${330 + i * 0})`}>
        <rect x={i * 120} y={340} width="10" height="10" rx="3" fill={color} />
        <text x={i * 120 + 15} y={350} fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="'Inter',sans-serif">{label}</text>
      </g>
    ))}
    <text x="260" y="390" fill="rgba(255,255,255,0.2)" fontSize="11" fontFamily="'Inter',sans-serif" textAnchor="middle">VANTAGE</text>
  </svg>
);

// Press logos — branded horizontal name strip
const PressLogos = () => (
  <svg viewBox="0 0 520 80" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 12, marginTop: "2rem" }}>
    <rect width="520" height="80" fill="rgba(15, 23, 42, 0.6)" rx="16" stroke="rgba(59, 130, 246, 0.15)" strokeWidth="1" />
    {[["Economic Times", 80], ["Mint", 200], ["Business Standard", 330], ["Forbes India", 450]].map(([name, x]) => (
      <text key={name} x={x} y="45" fill="rgba(148, 163, 184, 0.8)" fontSize="13" fontFamily="'Inter',sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.02em">{name}</text>
    ))}
  </svg>
);

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 pe-4 py-3">
          <BrokerIllustration />
        </div>
        <div className="col-6 py-3 ps-4">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Vantage clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks &amp; IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <PressLogos />
        </div>
      </div>
    </div>
  );
}

export default Awards;
