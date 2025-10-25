import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg-pattern"></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">🚀 Launching MVP 2025</div>
          <h1>Bridge the gap between <span className="highlight">theory</span> and <span className="highlight">practice</span></h1>
          <p className="lead">
            Connect students and recent graduates with real short-term projects (1–3 months),
            AI-powered matching, mentorship, and portfolio-building tools.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#objectives">
              Get Started
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a className="btn ghost" href="#overview">Learn More</a>
          </div>
          <div className="stats-row">
            <div className="stat">
              <strong>500+</strong>
              <span>Active Projects</span>
            </div>
            <div className="stat">
              <strong>2K+</strong>
              <span>Students</span>
            </div>
            <div className="stat">
              <strong>95%</strong>
              <span>Match Rate</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">💼</div>
            <div>Real Projects</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🤖</div>
            <div>AI Matching</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🎓</div>
            <div>Mentorship</div>
          </div>
          <div className="hero-illustration">
            <img src="https://via.placeholder.com/520x340/4F46E5/FFFFFF?text=Skill+Bridge" alt="Platform illustration" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero