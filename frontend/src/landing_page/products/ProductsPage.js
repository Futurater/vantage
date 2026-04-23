import React from "react";

// ─── Product Illustration SVGs ───────────────────────────────────────────────

const KiteIllustration = () => (
  <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 20 }}>
    <defs>
      <linearGradient id="kiteBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#050a1c" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
      <linearGradient id="kiteChart" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="500" height="380" fill="url(#kiteBg)" rx="20" />
    {/* Top bar */}
    <rect x="0" y="0" width="500" height="44" fill="rgba(255,255,255,0.04)" rx="20" />
    <circle cx="20" cy="22" r="7" fill="#ef4444" opacity="0.7" />
    <circle cx="38" cy="22" r="7" fill="#f59e0b" opacity="0.7" />
    <circle cx="56" cy="22" r="7" fill="#22c55e" opacity="0.7" />
    <text x="240" y="28" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="'Inter',sans-serif" textAnchor="middle" fontWeight="500">Kite — Vantage Trading</text>
    {/* Horizontal grid */}
    {[90,140,190,240,290].map(y => (
      <line key={y} x1="30" y1={y} x2="470" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
    ))}
    {/* Chart area fill */}
    <polygon points="30,290 100,240 170,260 240,170 310,200 380,130 450,150 470,140 470,320 30,320"
      fill="url(#kiteChart)" />
    {/* Main chart line */}
    <polyline points="30,290 100,240 170,260 240,170 310,200 380,130 450,150 470,140"
      fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    {/* Candlestick-like bars */}
    {[[80,220,250,true],[140,190,240,false],[200,160,220,true],[260,130,200,true],[320,150,190,false],[380,110,180,true]].map(([x,y1,y2,up],i)=>(
      <g key={i}>
        <rect x={x-6} y={Math.min(y1,y2)} width="12" height={Math.abs(y2-y1)} rx="2"
          fill={up ? "rgba(34,197,94,0.7)" : "rgba(239,68,68,0.7)"} />
        <line x1={x} y1={Math.min(y1,y2)-6} x2={x} y2={Math.min(y1,y2)} stroke={up ? "#22c55e" : "#ef4444"} strokeWidth="1.5" />
        <line x1={x} y1={Math.max(y1,y2)} x2={x} y2={Math.max(y1,y2)+6} stroke={up ? "#22c55e" : "#ef4444"} strokeWidth="1.5" />
      </g>
    ))}
    {/* Floating card */}
    <rect x="310" y="200" width="155" height="95" rx="12" fill="rgba(15,25,55,0.9)"
      stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
    <text x="323" y="222" fill="#93c5fd" fontSize="9" fontFamily="'Inter',sans-serif" fontWeight="700">INFY NSE</text>
    <text x="323" y="244" fill="#ffffff" fontSize="20" fontFamily="'Inter',sans-serif" fontWeight="700">₹1,555</text>
    <text x="323" y="262" fill="#22c55e" fontSize="11" fontFamily="'Inter',sans-serif" fontWeight="600">▲ +1.60%  Today</text>
    <rect x="323" y="272" width="60" height="18" rx="9" fill="rgba(37,99,235,0.8)" />
    <text x="353" y="285" fill="#fff" fontSize="10" fontFamily="'Inter',sans-serif" textAnchor="middle" fontWeight="600">BUY</text>
    <rect x="390" y="272" width="60" height="18" rx="9" fill="rgba(239,68,68,0.8)" />
    <text x="420" y="285" fill="#fff" fontSize="10" fontFamily="'Inter',sans-serif" textAnchor="middle" fontWeight="600">SELL</text>
    {/* Ticker row */}
    <rect x="30" y="330" width="440" height="34" rx="8" fill="rgba(255,255,255,0.03)" />
    {[["RELIANCE","2,112 ▲","#22c55e",40],["TCS","3,194 ▼","#ef4444",155],["HDFCBANK","1,522 ▲","#22c55e",265],["WIPRO","577 ▲","#22c55e",375]].map(([n,p,c,x])=>(
      <g key={n}>
        <text x={x} y={349} fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="'Inter',sans-serif" fontWeight="600">{n}</text>
        <text x={x} y={360} fill={c} fontSize="9" fontFamily="'Inter',sans-serif" fontWeight="700">{p}</text>
      </g>
    ))}
  </svg>
);

const ConsoleIllustration = () => (
  <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 20 }}>
    <defs>
      <linearGradient id="consBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#050a1c" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
    </defs>
    <rect width="500" height="380" fill="url(#consBg)" rx="20" />
    <rect x="0" y="0" width="500" height="44" fill="rgba(255,255,255,0.04)" rx="20" />
    <text x="240" y="28" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="'Inter',sans-serif" textAnchor="middle">Console — Portfolio Overview</text>
    {/* Stat cards row */}
    {[
      [30, "#3b82f6", "Portfolio Value", "₹8,42,310", "+12.4%"],
      [180, "#22c55e", "Today's P&L", "+₹4,230", "+0.5%"],
      [330, "#8b5cf6", "Total Returns", "+₹1,02,540", "+13.9%"],
    ].map(([x, color, label, val, pct]) => (
      <g key={label}>
        <rect x={x} y={58} width="140" height="80" rx="12"
          fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
        <text x={x+12} y={78} fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="'Inter',sans-serif">{label}</text>
        <text x={x+12} y={104} fill="#ffffff" fontSize="18" fontFamily="'Inter',sans-serif" fontWeight="700">{val}</text>
        <text x={x+12} y={124} fill={color} fontSize="11" fontFamily="'Inter',sans-serif" fontWeight="600">{pct}</text>
      </g>
    ))}
    {/* Holdings table */}
    <rect x="30" y="155" width="440" height="24" rx="4" fill="rgba(255,255,255,0.06)" />
    {["Stock","Qty","Avg Price","LTP","P&L","Day"].map((h,i) => (
      <text key={h} x={38 + i*72} y={171} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'Inter',sans-serif" fontWeight="700">{h}</text>
    ))}
    {[
      ["INFY","1","₹1,350","₹1,555","▲ +15.1%","▼ -1.6%", "#22c55e","#ef4444"],
      ["TCS","1","₹3,041","₹3,194","▲ +5.0%","▼ -0.2%","#22c55e","#ef4444"],
      ["WIPRO","4","₹489","₹577","▲ +18.0%","▲ +0.3%","#22c55e","#22c55e"],
      ["HDFCBANK","2","₹1,383","₹1,522","▲ +10.0%","▲ +0.1%","#22c55e","#22c55e"],
    ].map(([stock,qty,avg,ltp,net,day,nc,dc],ri) => (
      <g key={stock}>
        <rect x="30" y={184+ri*30} width="440" height="26" rx="4"
          fill={ri%2===0 ? "rgba(255,255,255,0.02)":"transparent"} />
        <text x="38" y={201+ri*30} fill="rgba(255,255,255,0.85)" fontSize="10" fontFamily="'Inter',sans-serif" fontWeight="600">{stock}</text>
        <text x="110" y={201+ri*30} fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="'Inter',sans-serif">{qty}</text>
        <text x="182" y={201+ri*30} fill="rgba(255,255,255,0.6)" fontSize="10" fontFamily="'Inter',sans-serif">{avg}</text>
        <text x="254" y={201+ri*30} fill="rgba(255,255,255,0.85)" fontSize="10" fontFamily="'Inter',sans-serif">{ltp}</text>
        <text x="326" y={201+ri*30} fill={nc} fontSize="10" fontFamily="'Inter',sans-serif" fontWeight="600">{net}</text>
        <text x="398" y={201+ri*30} fill={dc} fontSize="10" fontFamily="'Inter',sans-serif" fontWeight="600">{day}</text>
      </g>
    ))}
    {/* Pie chart sketch */}
    <circle cx="430" cy="320" r="44" fill="none" stroke="#3b82f6" strokeWidth="20"
      strokeDasharray="110 276" />
    <circle cx="430" cy="320" r="44" fill="none" stroke="#22c55e" strokeWidth="20"
      strokeDasharray="60 276" strokeDashoffset="-110" />
    <circle cx="430" cy="320" r="44" fill="none" stroke="#8b5cf6" strokeWidth="20"
      strokeDasharray="50 276" strokeDashoffset="-170" />
    <circle cx="430" cy="320" r="44" fill="none" stroke="#f59e0b" strokeWidth="20"
      strokeDasharray="56 276" strokeDashoffset="-220" />
    <circle cx="430" cy="320" r="26" fill="#050a1c" />
    <text x="430" y="317" fill="#fff" fontSize="9" fontFamily="'Inter',sans-serif" textAnchor="middle">Alloc</text>
  </svg>
);

const CoinIllustration = () => (
  <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 20 }}>
    <defs>
      <linearGradient id="coinBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#050a1c" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
      <linearGradient id="barGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#5b21b6" />
      </linearGradient>
    </defs>
    <rect width="500" height="380" fill="url(#coinBg)" rx="20" />
    <rect x="0" y="0" width="500" height="44" fill="rgba(255,255,255,0.04)" rx="20" />
    <text x="240" y="28" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="'Inter',sans-serif" textAnchor="middle">Coin — Direct Mutual Funds</text>
    {/* Fund cards */}
    {[
      [30, "#8b5cf6", "Axis Bluechip Fund", "Large Cap", "18.4%", "★ 4.5"],
      [270, "#22c55e", "HDFC Mid-Cap Fund", "Mid Cap", "22.1%", "★ 4.8"],
    ].map(([x, color, name, cat, ret, rating]) => (
      <g key={name}>
        <rect x={x} y={58} width="200" height="130" rx="14"
          fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1" strokeOpacity="0.4" />
        <circle cx={x+20} cy={78} r="12" fill={color} opacity="0.2" />
        <circle cx={x+20} cy={78} r="6" fill={color} />
        <text x={x+36} y={82} fill={color} fontSize="10" fontFamily="'Inter',sans-serif" fontWeight="700">{cat}</text>
        <text x={x+12} y={104} fill="rgba(255,255,255,0.85)" fontSize="12" fontFamily="'Inter',sans-serif" fontWeight="600">{name}</text>
        <text x={x+12} y={128} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'Inter',sans-serif">3Y Returns</text>
        <text x={x+12} y={148} fill={color} fontSize="24" fontFamily="'Inter',sans-serif" fontWeight="700">{ret}</text>
        <text x={x+12} y={178} fill="#f59e0b" fontSize="12" fontFamily="'Inter',sans-serif">{rating}</text>
      </g>
    ))}
    {/* SIP bar chart */}
    <text x="30" y="220" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="'Inter',sans-serif" fontWeight="600">SIP Growth Simulation</text>
    {[50,80,60,90,70,100,85,110,95,120,105,130].map((h, i) => (
      <rect key={i} x={30 + i * 37} y={360 - h} width="26" height={h} rx="4"
        fill={`url(#barGrad)`} opacity={0.5 + i * 0.04} />
    ))}
    <line x1="30" y1="360" x2="470" y2="360" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
    <text x="30" y="375" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="'Inter',sans-serif">Jan</text>
    <text x="448" y="375" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="'Inter',sans-serif">Dec</text>
  </svg>
);

const APIIllustration = () => (
  <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 20 }}>
    <defs>
      <linearGradient id="apiBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#050a1c" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
    </defs>
    <rect width="500" height="380" fill="url(#apiBg)" rx="20" />
    <rect x="0" y="0" width="500" height="44" fill="rgba(255,255,255,0.04)" rx="20" />
    <text x="240" y="28" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="'Inter',sans-serif" textAnchor="middle">Kite Connect — Developer API</text>
    {/* Code block */}
    <rect x="30" y="58" width="440" height="280" rx="12" fill="rgba(0,0,0,0.5)"
      stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
    <rect x="30" y="58" width="440" height="30" rx="12" fill="rgba(255,255,255,0.05)" />
    <circle cx="50" cy="73" r="5" fill="#ef4444" opacity="0.7" />
    <circle cx="65" cy="73" r="5" fill="#f59e0b" opacity="0.7" />
    <circle cx="80" cy="73" r="5" fill="#22c55e" opacity="0.7" />
    <text x="200" y="78" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">api.vantage.in/v3</text>
    {[
      [100, "#60a5fa", "POST ", "#f472b6", "/orders/regular", "#94a3b8", " → Place Order"],
      [125, "#60a5fa", "GET  ", "#f472b6", "/portfolio/holdings", "#94a3b8", " → Holdings"],
      [150, "#60a5fa", "GET  ", "#f472b6", "/quote/ohlc?i=NSE:INFY", "#94a3b8", ""],
      [175, "#22c55e", "{", "", "", "", ""],
      [195, "#f59e0b", "  tradingsymbol", "#94a3b8", ": ", "#a78bfa", '"INFY"'],
      [215, "#f59e0b", "  exchange", "#94a3b8", ": ", "#a78bfa", '"NSE"'],
      [235, "#f59e0b", "  transaction_type", "#94a3b8", ": ", "#a78bfa", '"BUY"'],
      [255, "#f59e0b", "  quantity", "#94a3b8", ": ", "#a78bfa", "1"],
      [275, "#22c55e", "}", "", "", "", ""],
      [305, "#94a3b8", "// Response: ", "#22c55e", '{ "order_id": "241001000012" }', "", ""],
    ].map(([y, c1, t1, c2, t2, c3, t3]) => (
      <g key={y}>
        <text x="48" y={y} fill={c1} fontSize="11" fontFamily="monospace">{t1}</text>
        {t2 && <text x={48 + t1.length * 7.2} y={y} fill={c2} fontSize="11" fontFamily="monospace">{t2}</text>}
        {t3 && <text x={48 + (t1.length + t2.length) * 7.2} y={y} fill={c3} fontSize="11" fontFamily="monospace">{t3}</text>}
      </g>
    ))}
  </svg>
);

const VarsityIllustration = () => (
  <svg viewBox="0 0 500 380" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 20 }}>
    <defs>
      <linearGradient id="varBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#050a1c" />
        <stop offset="100%" stopColor="#0d1f4a" />
      </linearGradient>
    </defs>
    <rect width="500" height="380" fill="url(#varBg)" rx="20" />
    <rect x="0" y="0" width="500" height="44" fill="rgba(255,255,255,0.04)" rx="20" />
    <text x="240" y="28" fill="rgba(255,255,255,0.5)" fontSize="12" fontFamily="'Inter',sans-serif" textAnchor="middle">Varsity — Market Education</text>
    {/* Module cards */}
    {[
      [30, "#3b82f6", "📈", "Technical Analysis", "12 chapters", 72],
      [200, "#22c55e", "📊", "Fundamental Analysis", "10 chapters", 45],
      [370, "#8b5cf6", "⚡", "Futures & Options", "15 chapters", 28],
    ].map(([x, color, icon, title, ch, progress]) => (
      <g key={title}>
        <rect x={x} y={60} width="120" height="160" rx="14"
          fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
        <text x={x + 60} y={96} fontSize="28" textAnchor="middle">{icon}</text>
        <text x={x + 60} y={118} fill="#ffffff" fontSize="10" fontFamily="'Inter',sans-serif" fontWeight="600" textAnchor="middle">{title}</text>
        <text x={x + 60} y={136} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="'Inter',sans-serif" textAnchor="middle">{ch}</text>
        {/* Progress bar */}
        <rect x={x + 10} y={155} width="100" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
        <rect x={x + 10} y={155} width={progress} height="6" rx="3" fill={color} />
        <text x={x + 60} y={178} fill={color} fontSize="9" fontFamily="'Inter',sans-serif" textAnchor="middle">
          {Math.round(progress)}% Complete
        </text>
        <rect x={x + 20} y={192} width="80" height="18" rx="9" fill={color} opacity="0.85" />
        <text x={x + 60} y={205} fill="#fff" fontSize="10" fontFamily="'Inter',sans-serif" textAnchor="middle" fontWeight="600">Continue</text>
      </g>
    ))}
    {/* Recent articles */}
    <text x="30" y="255" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="'Inter',sans-serif" fontWeight="600">RECENT LESSONS</text>
    {[
      ["Understanding Candlestick Patterns", "Technical Analysis", "#3b82f6"],
      ["How to Read a Balance Sheet", "Fundamental Analysis", "#22c55e"],
      ["Options Greeks Explained", "F&O", "#8b5cf6"],
    ].map(([title, cat, color], i) => (
      <g key={title}>
        <rect x="30" y={268 + i * 34} width="440" height="28" rx="8"
          fill="rgba(255,255,255,0.03)" />
        <rect x="38" y={276 + i * 34} width="4" height="12" rx="2" fill={color} />
        <text x="50" y={286 + i * 34} fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="'Inter',sans-serif">{title}</text>
        <text x="420" y={286 + i * 34} fill={color} fontSize="9" fontFamily="'Inter',sans-serif" textAnchor="end">{cat}</text>
      </g>
    ))}
  </svg>
);

// ─── Badge Components ─────────────────────────────────────────────────────────
const GooglePlayBadge = () => (
  <svg viewBox="0 0 160 46" xmlns="http://www.w3.org/2000/svg" style={{ height: 46, borderRadius: 8 }}>
    <rect width="160" height="46" fill="#111" rx="8" />
    <text x="12" y="16" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="sans-serif">GET IT ON</text>
    <text x="12" y="37" fill="#ffffff" fontSize="17" fontFamily="'Inter',sans-serif" fontWeight="700">Google Play</text>
    <text x="148" y="30" fill="#34d399" fontSize="22" fontFamily="sans-serif" textAnchor="middle">▶</text>
  </svg>
);

const AppStoreBadge = () => (
  <svg viewBox="0 0 160 46" xmlns="http://www.w3.org/2000/svg" style={{ height: 46, borderRadius: 8 }}>
    <rect width="160" height="46" fill="#111" rx="8" />
    <text x="12" y="16" fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="sans-serif">Download on the</text>
    <text x="12" y="37" fill="#ffffff" fontSize="17" fontFamily="'Inter',sans-serif" fontWeight="700">App Store</text>
    <text x="148" y="30" fill="#60a5fa" fontSize="20" fontFamily="sans-serif" textAnchor="middle"></text>
  </svg>
);

// ─── Product Section Components ───────────────────────────────────────────────
const ProductCard = ({ illustration, name, description, tryDemo, learnMore, googlePlay, appStore, flip }) => (
  <div style={{
    display: "flex",
    flexDirection: flip ? "row-reverse" : "row",
    alignItems: "center",
    gap: 48,
    padding: "60px 0",
    borderBottom: "1px solid rgba(59, 130, 246, 0.15)",
  }}>
    <div style={{ flex: 1.2 }}>{illustration}</div>
    <div style={{ flex: 1 }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 16, color: "#f0f6ff" }}>{name}</h2>
      <p style={{ color: "#94a3b8", lineHeight: 1.75, marginBottom: 24, fontSize: "1rem" }}>{description}</p>
      <div style={{ display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" }}>
        {tryDemo && (
          <a href={tryDemo} style={{ textDecoration: "none", color: "#2563eb", fontWeight: 600 }}>
            Try Demo →
          </a>
        )}
        {learnMore && (
          <a href={learnMore} style={{ textDecoration: "none", color: "#94a3b8", fontWeight: 500 }}>
            Learn More →
          </a>
        )}
      </div>
      {(googlePlay || appStore) && (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {googlePlay && <a href={googlePlay}><GooglePlayBadge /></a>}
          {appStore && <a href={appStore}><AppStoreBadge /></a>}
        </div>
      )}
    </div>
  </div>
);

// ─── Universe Grid ─────────────────────────────────────────────────────────────
const partners = [
  { label: "Smallcase", color: "#16a34a", icon: "📦", desc: "Thematic stock baskets" },
  { label: "Sensibull", color: "#d97706", icon: "📊", desc: "Options trading platform" },
  { label: "Goldbees", color: "#ca8a04", icon: "🥇", desc: "Digital gold investments" },
  { label: "Streak", color: "#7c3aed", icon: "⚡", desc: "Algorithmic strategies" },
  { label: "Kuvera", color: "#2563eb", icon: "🌐", desc: "Free mutual fund platform" },
  { label: "TradingQnA", color: "#dc2626", icon: "💬", desc: "Market Q&A community" },
];

const PartnerTile = ({ label, color, icon, desc }) => (
  <div style={{
    background: "rgba(15, 28, 55, 0.4)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    borderRadius: 16,
    padding: "28px 20px",
    textAlign: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  }}
    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 36px ${color}22`; e.currentTarget.style.border = `1px solid ${color}55`; }}
    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.border = "1px solid rgba(59, 130, 246, 0.2)"; }}
  >
    <div style={{ fontSize: 36, marginBottom: 10 }}>{icon}</div>
    <div style={{ fontSize: 15, fontWeight: 700, color: "#f0f6ff", marginBottom: 6 }}>{label}</div>
    <div style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.5 }}>{desc}</div>
  </div>
);

// ─── Main Products Page ────────────────────────────────────────────────────────
function ProductsPage() {
  return (
    <div>
      {/* Hero */}
      <div style={{
        textAlign: "center",
        padding: "80px 40px 60px",
        borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
        background: "linear-gradient(to bottom, rgba(15, 28, 55, 0.3), transparent)",
      }}>
        <h1 style={{ fontSize: "2.8rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#f0f6ff" }}>
          Technology
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginTop: 16, maxWidth: 520, margin: "16px auto 0" }}>
          Sleek, modern, and intuitive trading platforms built for every kind of investor.
        </p>
        <a href="#" style={{ display: "inline-block", marginTop: 24, color: "#60a5fa", fontWeight: 600, textDecoration: "none" }}>
          View our investment offerings →
        </a>
      </div>

      {/* Products */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <ProductCard
          illustration={<KiteIllustration />}
          name="Kite"
          description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          tryDemo="#"
          learnMore="#"
          googlePlay="#"
          appStore="#"
          flip={false}
        />
        <ProductCard
          illustration={<ConsoleIllustration />}
          name="Console"
          description="The central dashboard for your Vantage account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnMore="#"
          flip={true}
        />
        <ProductCard
          illustration={<CoinIllustration />}
          name="Coin"
          description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
          tryDemo="#"
          learnMore="#"
          googlePlay="#"
          appStore="#"
          flip={false}
        />
        <ProductCard
          illustration={<APIIllustration />}
          name="Kite Connect API"
          description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnMore="#"
          flip={true}
        />
        <ProductCard
          illustration={<VarsityIllustration />}
          name="Varsity Mobile"
          description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
          tryDemo="#"
          learnMore="#"
          googlePlay="#"
          appStore="#"
          flip={false}
        />
      </div>

      {/* Tech blog note */}
      <p style={{ textAlign: "center", margin: "48px 0", color: "#94a3b8" }}>
        Want to know more about our technology stack?{" "}
        <a href="#" style={{ color: "#60a5fa", textDecoration: "none", fontWeight: 600 }}>
          Check out the Vantage.tech blog →
        </a>
      </p>

      {/* Universe */}
      <div style={{ background: "rgba(5, 10, 22, 0.5)", padding: "60px 40px", borderTop: "1px solid rgba(59, 130, 246, 0.1)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#f0f6ff" }}>The Vantage Universe</h2>
            <p style={{ color: "#94a3b8", marginTop: 12 }}>
              Extend your experience with our partner platforms
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {partners.map(p => <PartnerTile key={p.label} {...p} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button style={{
              background: "linear-gradient(135deg, #1d4ed8, #2563eb)",
              color: "#fff",
              border: "none",
              borderRadius: 9999,
              padding: "14px 40px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(37,99,235,0.3)",
            }}>
              Open Free Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
