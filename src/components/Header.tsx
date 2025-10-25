import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="brand">
          <div className="logo-mark" aria-hidden="true">SB</div>
          <span className="brand-title">Skill Bridge</span>
        </div>
        <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#objectives">Objectives</a>
          <a href="#domains">Domains</a>
          <a href="#contact">Contact</a>
          <button className="btn-nav">Login</button>
          <button className="btn-nav">Sign Up</button>
        </nav>
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header