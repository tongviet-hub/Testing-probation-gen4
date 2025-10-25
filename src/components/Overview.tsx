import React from 'react'
import './Overview.css'

function Overview() {
  return (
    <section id="overview" className="overview-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Overview</span>
          <h2>Bridging Theory and Practice</h2>
        </div>
        
        <div className="overview-content">
          <div className="overview-text">
            <h3>The Challenge</h3>
            <p>
              In the increasingly competitive labor market in Vietnam, students and recent graduates 
              face significant challenges in gaining practical experience. Many possess solid theoretical 
              knowledge from universities but lack opportunities to apply it in real-world settings.
            </p>
            <p>
              Existing platforms like LinkedIn and job boards focus on networking and postings but 
              don't provide pathways for inexperienced individuals to participate in real projects.
            </p>
            
            <h3>Our Solution</h3>
            <p>
              Skill Bridge connects students with short-term real-world projects (1–3 months), 
              integrating mentorship, feedback, and portfolio-building features.
            </p>
            
            <div className="highlight-box">
              <div className="highlight-icon">⚡</div>
              <div>
                <strong>AI-Powered Platform</strong>
                <p>Leverages AI to match projects with skill sets and verify project quality before publishing</p>
              </div>
            </div>
          </div>
          
          <div className="overview-visual">
            <div className="stat-card">
              <div className="stat-number">1-3</div>
              <div className="stat-label">Month Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4+</div>
              <div className="stat-label">Domain Areas</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">AI Verified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview