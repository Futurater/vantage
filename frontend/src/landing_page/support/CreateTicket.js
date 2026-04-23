import React from "react";
import { Link } from "react-router-dom";

const supportCategories = [
  {
    icon: "fa-plus-circle",
    title: "Account Opening",
    links: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Vantage",
      "Vantage IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ]
  },
  {
    icon: "fa-user",
    title: "Your Vantage Account",
    links: [
      "Login credentials",
      "Your Profile",
      "Account modification and segment addition",
      "CMR & DP ID",
      "Nomination",
      "Transfer and conversion of shares",
    ]
  },
  {
    icon: "fa-bar-chart",
    title: "Trading and Markets",
    links: [
      "Trading FAQs",
      "Kite",
      "Margins",
      "Product and order types",
      "Corporate actions",
      "Kite features",
    ]
  },
  {
    icon: "fa-credit-card",
    title: "Funds",
    links: [
      "Fund withdrawal",
      "Adding funds",
      "Adding bank accounts",
      "eMandates",
    ]
  },
  {
    icon: "fa-circle-o-notch",
    title: "Console",
    links: [
      "IPO",
      "Portfolio",
      "Funds statement",
      "Profile",
      "Reports",
      "Referral program",
    ]
  },
  {
    icon: "fa-pie-chart",
    title: "Coin",
    links: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ]
  }
];

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-5" style={{ color: "#f0f6ff" }}>To create a ticket, select a relevant topic</h1>
        {supportCategories.map((cat, index) => (
          <div className="col-4 p-4 mt-2 mb-2" key={index}>
            <h4 style={{ color: "#f0f6ff", fontWeight: 600, marginBottom: "20px" }}>
              <i className={`fa ${cat.icon}`} aria-hidden="true" style={{ marginRight: "10px", color: "#3b82f6" }}></i>
              {cat.title}
            </h4>
            {cat.links.map((link, i) => (
              <React.Fragment key={i}>
                <Link to="" style={{ textDecoration: "none", lineHeight: "2.5", color: "#60a5fa", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#93c5fd"} onMouseLeave={e => e.currentTarget.style.color = "#60a5fa"}>
                  {link}
                </Link>
                <br />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
