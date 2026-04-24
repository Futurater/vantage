import React from "react";

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
    <circle cx="110" cy="82" r="34" fill="rgba(255,255,255,0.85)" />
    <ellipse cx="110" cy="180" rx="62" ry="52" fill="rgba(255,255,255,0.7)" />
    <circle cx="110" cy="110" r="106" fill="none" stroke="#60a5fa" strokeWidth="3" />
    <text x="110" y="92" fill="#1e3a8a" fontSize="28" fontFamily="'Inter',sans-serif" fontWeight="800" textAnchor="middle">SV</text>
  </svg>
);

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">About Me</h1>
      </div>

      <div
        className="row p-3"
        style={{ lineHeight: "1.8", fontSize: "1.2em", color: "#cbd5e1" }}
      >
        <div className="col-6 p-3 text-center">
          <FounderAvatar />
          <h4 className="mt-5">Sagar Varma</h4>
          <h6>Full Stack MERN Developer</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Hi, I'm Sagar. I am a student at Sir MVIT and a passionate Full Stack Developer 
            with expertise in the MERN stack (MongoDB, Express, React, Node.js). 
            I created this platform as a demonstration of blending financial
            tools with modern web technologies.
          </p>
          <p>
            My goal is to continuously build innovative applications that solve
            real-world problems and provide an intuitive user experience.
          </p>
          <p>
            Outside of coding, I am an enthusiastic learner who
            believes the future belongs to those who build it.
          </p>
          <p>
            Connect on{" "}
            <a href="/support">LinkedIn</a> /{" "}
            <a href="/support">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
