import React from "react";

// Professional avatar illustration — abstract person silhouette with gradient
const FounderAvatar = () => (
  <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style={{ width: "50%", borderRadius: "50%", display: "block", margin: "0 auto" }}>
    <defs>
      <linearGradient id="avatarBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a8a" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
      <clipPath id="circle">
        <circle cx="110" cy="110" r="106" />
      </clipPath>
    </defs>
    <circle cx="110" cy="110" r="110" fill="url(#avatarBg)" />
    {/* Abstract person: head + shoulders */}
    <circle cx="110" cy="82" r="34" fill="rgba(255,255,255,0.85)" />
    <ellipse cx="110" cy="180" rx="62" ry="52" fill="rgba(255,255,255,0.7)" />
    <circle cx="110" cy="110" r="106" fill="none" stroke="#60a5fa" strokeWidth="3" />
    {/* Initial letter */}
    <text x="110" y="92" fill="#1e3a8a" fontSize="28" fontFamily="'Inter',sans-serif" fontWeight="800" textAnchor="middle">NK</text>
  </svg>
);

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <FounderAvatar />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Vantage in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Vantage has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="/">Homepage</a> / <a href="/support">TradingQnA</a> /{" "}
            <a href="/support">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
