import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const API = process.env.REACT_APP_API_URL || "http://localhost:3002";
      const DASHBOARD = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3000";

      const res = await fetch(`${API}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: formData.username, email: formData.email, password: formData.password }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setError(body.error || 'Signup failed');
        return;
      }

      const body = await res.json();
      localStorage.setItem('token', body.token);
      // redirect directly to dashboard app with token
      window.location.href = `${DASHBOARD}/?token=${body.token}`;
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.glassCard}>
        <h2 style={styles.title}>Join Vantage Trading</h2>
        <p style={styles.subtitle}>Sign up or log in to access your dashboard.</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input 
              type="text" 
              name="username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input} 
              placeholder="Enter your username"
              required 
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input} 
              placeholder="Enter your email"
              required 
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={styles.input} 
              placeholder="Create a password"
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
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '80vh',
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

export default Signup;
