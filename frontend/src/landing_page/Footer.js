import React from "react";
import { Link } from "react-router-dom";

const VantageLogoFooter = () => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg" style={{ height: 40, width: "auto" }}>
    <defs>
      <linearGradient id="ftLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
    <polygon points="4,7 16,7 22,28 28,7 40,7 22,40" fill="url(#ftLogoGrad)" />
    <text x="48" y="31" fill="#f0f6ff" fontSize="22" fontFamily="'Inter','Segoe UI',sans-serif" fontWeight="800" letterSpacing="-0.5">VANTAGE</text>
  </svg>
);

const s = {
  footer: {
    backgroundColor: "#050a14",
    borderTop: "1px solid rgba(59, 130, 246, 0.2)",
    padding: "60px 0 0",
    marginTop: "auto",
  },
  inner: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 24px",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
    paddingBottom: "40px",
  },
  brand: {
    flex: "1 1 200px",
    minWidth: 160,
  },
  col: {
    flex: "1 1 120px",
    minWidth: 120,
  },
  colHead: {
    color: "#f0f6ff",
    fontWeight: 600,
    fontSize: "0.9rem",
    marginBottom: "14px",
    display: "block",
  },
  link: {
    display: "block",
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.85rem",
    marginBottom: "10px",
    transition: "color 0.2s",
  },
  tagline: {
    color: "#94a3b8",
    fontSize: "0.82rem",
    marginTop: "12px",
    lineHeight: 1.6,
  },
  legal: {
    borderTop: "1px solid rgba(59, 130, 246, 0.12)",
    padding: "24px 0",
    marginTop: "8px",
  },
  legalText: {
    color: "rgba(148, 163, 184, 0.55)",
    fontSize: "0.72rem",
    lineHeight: 1.7,
    marginBottom: "10px",
  },
};

const linkStyle = (hovered) => ({
  ...s.link,
  color: hovered ? "#60a5fa" : "#94a3b8",
});

function FooterLink({ to, children }) {
  const [hov, setHov] = React.useState(false);
  return (
    <Link
      to={to}
      style={linkStyle(hov)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.inner}>
        <div style={s.grid}>
          {/* Brand */}
          <div style={s.brand}>
            <VantageLogoFooter />
            <p style={s.tagline}>
              © 2010 – 2024, Vantage Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div style={s.col}>
            <span style={s.colHead}>Company</span>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/product">Products</FooterLink>
            <FooterLink to="/pricing">Pricing</FooterLink>
            <FooterLink to="/support">Referral programme</FooterLink>
            <FooterLink to="/support">Careers</FooterLink>
            <FooterLink to="/product">Vantage.tech</FooterLink>
            <FooterLink to="/support">Press &amp; media</FooterLink>
            <FooterLink to="/support">Vantage cares (CSR)</FooterLink>
          </div>

          {/* Support */}
          <div style={s.col}>
            <span style={s.colHead}>Support</span>
            <FooterLink to="/support">Contact</FooterLink>
            <FooterLink to="/support">Support portal</FooterLink>
            <FooterLink to="/support">Z-Connect blog</FooterLink>
            <FooterLink to="/support">List of charges</FooterLink>
            <FooterLink to="/support">Downloads &amp; resources</FooterLink>
          </div>

          {/* Account */}
          <div style={s.col}>
            <span style={s.colHead}>Account</span>
            <FooterLink to="/signup">Open an account</FooterLink>
            <FooterLink to="/support">Fund transfer</FooterLink>
            <FooterLink to="/support">60 day challenge</FooterLink>
          </div>
        </div>

        {/* Legal */}
        <div style={s.legal}>
          <p style={s.legalText}>
            Vantage Broking Ltd.: Member of NSE &amp; BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Vantage Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Vantage Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Vantage Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
          </p>
          <p style={s.legalText}>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing.
          </p>
          <p style={s.legalText}>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers." If you find anyone claiming to be part of Vantage and offering such services, please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
