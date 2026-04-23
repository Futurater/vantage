import React from "react";

const GooglePlayBadge = () => (
  <svg viewBox="0 0 160 46" xmlns="http://www.w3.org/2000/svg" style={{ height: 46, borderRadius: 8 }}>
    <rect width="160" height="46" fill="#000" rx="8" />
    <text x="12" y="16" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="sans-serif">GET IT ON</text>
    <text x="12" y="35" fill="#ffffff" fontSize="16" fontFamily="'Inter',sans-serif" fontWeight="700">Google Play</text>
    <text x="140" y="30" fill="#34d399" fontSize="20" fontFamily="sans-serif" textAnchor="middle">▶</text>
  </svg>
);

const AppStoreBadge = () => (
  <svg viewBox="0 0 160 46" xmlns="http://www.w3.org/2000/svg" style={{ height: 46, borderRadius: 8 }}>
    <rect width="160" height="46" fill="#000" rx="8" />
    <text x="12" y="16" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="sans-serif">Download on the</text>
    <text x="12" y="35" fill="#ffffff" fontSize="16" fontFamily="'Inter',sans-serif" fontWeight="700">App Store</text>
    <text x="140" y="30" fill="#60a5fa" fontSize="20" fontFamily="sans-serif" textAnchor="middle">🍎</text>
  </svg>
);

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <GooglePlayBadge />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <AppStoreBadge />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
