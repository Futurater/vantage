import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const API = process.env.REACT_APP_API_URL || "http://localhost:3002";
      const DASHBOARD = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3000";

      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const body = await res.json();
        setError(body.error || "Login failed");
        return;
      }

      const body = await res.json();
      localStorage.setItem("token", body.token);
      // redirect directly to dashboard app and pass token via query
      window.location.href = `${DASHBOARD}/?token=${body.token}`;
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.glassCard}>
        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>Login to Vantage to access your dashboard.</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          
          <button 
            type="submit" 
            style={styles.button}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.35)';
            }}
          >
            Access Dashboard
          </button>
          
          {error && (
            <div style={{ color: "#ef4444", marginTop: 12, fontSize: "0.9rem", fontWeight: 500 }}>
              {error}
            </div>
          )}
        </form>
        
        <p style={{ marginTop: '24px', fontSize: '0.9rem', color: '#94a3b8' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#60a5fa', textDecoration: 'none', fontWeight: 600 }}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  glassCard: {
    background: 'rgba(8, 15, 30, 0.82)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '32px',
    padding: '48px',
    width: '100%',
    maxWidth: '480px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 1.5px 0 rgba(59,130,246,0.1) inset',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#f0f6ff',
    margin: '0 0 8px 0',
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontSize: '0.95rem',
    color: '#94a3b8',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '8px',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#94a3b8',
    marginLeft: '8px',
  },
  input: {
    width: '100%',
    padding: '14px 20px',
    background: 'rgba(15, 28, 55, 0.7)',
    border: '1px solid rgba(59, 130, 246, 0.2)',
    borderRadius: '9999px',
    color: '#f0f6ff',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxSizing: 'border-box'
  },
  button: {
    marginTop: '12px',
    padding: '16px',
    background: 'linear-gradient(135deg, #1d4ed8, #2563eb)',
    color: '#fff',
    border: 'none',
    borderRadius: '9999px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
  }
};

export default Login;
