import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5" style={{ color: "#f0f6ff", fontWeight: 700 }}>Open a Vantage account</h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "2rem" }}>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          className="btn-vantage mb-5"
          style={{ width: "25%", margin: "0 auto" }}
          to="/signup"
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
