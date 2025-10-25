import React from 'react'
import './Features.css'

function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'AI-Powered Matching',
      description: 'Advanced algorithms analyze your skills and match you with projects that fit your expertise and career goals.'
    },
    {
      icon: '👥',
      title: 'Expert Mentorship',
      description: 'Get guidance from industry professionals who provide feedback and support throughout your project journey.'
    },
    {
      icon: '📊',
      title: 'Portfolio Builder',
      description: 'Showcase your completed projects with certifications and build a professional portfolio that stands out.'
    },
    {
      icon: '🏆',
      title: 'Gamification',
      description: 'Earn points, badges, and rankings as you complete projects and engage with the community.'
    },
    {
      icon: '🔍',
      title: 'Project Verification',
      description: 'All projects are AI-verified for quality and feasibility before being published to ensure learning value.'
    },
    {
      icon: '🌐',
      title: 'Diverse Domains',
      description: 'Explore projects in Marketing, IT & STEM, Design, Social Impact, and more across various industries.'
    }
  ]

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Features</span>
          <h2>Everything you need to succeed</h2>
          <p>Powerful tools and features designed to help you gain real-world experience</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features