import React from 'react'
import './Domains.css'

function Domains() {
  const domains = [
    {
      title: 'Marketing & Communications',
      icon: '📢',
      color: '#ef4444',
      projects: ['Social Media Campaigns', 'Content Strategy', 'Brand Development', 'Market Research']
    },
    {
      title: 'IT & STEM',
      icon: '💻',
      color: '#3b82f6',
      projects: ['Web Development', 'Mobile Apps', 'Data Analysis', 'AI/ML Projects']
    },
    {
      title: 'Design & Creative',
      icon: '🎨',
      color: '#8b5cf6',
      projects: ['UI/UX Design', 'Graphic Design', 'Video Production', 'Brand Identity']
    },
    {
      title: 'Volunteering & Social Impact',
      icon: '❤️',
      color: '#10b981',
      projects: ['Community Outreach', 'Nonprofit Support', 'Environmental Projects', 'Education Initiatives']
    }
  ]

  return (
    <section id="domains" className="domains-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Project Domains</span>
          <h2>Explore Diverse Fields</h2>
          <p>Find projects across multiple industries and domains</p>
        </div>

        <div className="domains-grid">
          {domains.map((domain, index) => {
            const cardStyle = { ['--domain-color' as any]: domain.color } as React.CSSProperties;
            return (
              <div key={index} className="domain-card" style={cardStyle}>
                <div className="domain-icon">{domain.icon}</div>
                <h3>{domain.title}</h3>
                <ul className="project-list">
                  {domain.projects.map((project, idx) => (
                    <li key={idx}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {project}
                    </li>
                  ))}
                </ul>
                <a href="#" className="domain-link">
                  Explore Projects
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Domains