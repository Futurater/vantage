import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../dashboard/Home";

// Token handoff — if token arrives via query string from login flow, persist it
try {
  const params = new URLSearchParams(window.location.search);
  const t = params.get("token");
  if (t) {
    localStorage.setItem("token", t);
    params.delete("token");
    const newSearch = params.toString();
    const newUrl = window.location.pathname + (newSearch ? "?" + newSearch : "");
    window.history.replaceState({}, document.title, newUrl);
  }
} catch (e) {
  // ignore in non-browser environments
}

const DashboardEmbed = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) return null;

  return <Home />;
};

export default DashboardEmbed;
