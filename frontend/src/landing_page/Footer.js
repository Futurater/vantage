import React from "react";

const VantageLogoFooter = () => (
  <svg viewBox="0 0 160 44" xmlns="http://www.w3.org/2000/svg" style={{ height: 44, width: "auto" }}>
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

function Footer() {
  return (
    <footer style={{ backgroundColor: "#050a14", borderTop: "1px solid rgba(59, 130, 246, 0.2)", marginTop: "60px" }}>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <VantageLogoFooter />
            <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "1rem" }}>
              &copy; 2010 - 2024, Not Vantage Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className="col footer-links">
            <p style={{ color: "#f0f6ff", fontWeight: 600 }}>Company</p>
            <a href="/about">About</a>
            <br />
            <a href="/product">Products</a>
            <br />
            <a href="/pricing">Pricing</a>
            <br />
            <a href="/support">Referral programme</a>
            <br />
            <a href="/support">Careers</a>
            <br />
            <a href="/product">Vantage.tech</a>
            <br />
            <a href="/support">Press & media</a>
            <br />
            <a href="/support">Vantage cares (CSR)</a>
            <br />
          </div>
          <div className="col footer-links">
            <p style={{ color: "#f0f6ff", fontWeight: 600 }}>Support</p>
            <a href="/support">Contact</a>
            <br />
            <a href="/support">Support portal</a>
            <br />
            <a href="/support">Z-Connect blog</a>
            <br />
            <a href="/support">List of charges</a>
            <br />
            <a href="/support">Downloads & resources</a>
            <br />
          </div>
          <div className="col footer-links">
            <p style={{ color: "#f0f6ff", fontWeight: 600 }}>Account</p>
            <a href="/signup">Open an account</a>
            <br />
            <a href="/support">Fund transfer</a>
            <br />
            <a href="/support">60 day challenge</a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "12px", color: "rgba(148, 163, 184, 0.6) !important" }}>
          <p>
            Vantage Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Vantage Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Vantage Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Vantage Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@vantage.com, for DP related to dp@vantage.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Vantage and offering such services, please
            create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
