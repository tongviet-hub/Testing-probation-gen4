import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <div className="logo-mark">SB</div>
              <span className="brand-title">Skill Bridge</span>
            </div>
            <p>Connecting students with real-world projects to build practical skills and professional portfolios.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18.5 0h-17A1.5 1.5 0 000 1.5v17A1.5 1.5 0 001.5 20h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0018.5 0zM6 17H3V7.5h3V17zM4.5 6.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75S6.25 3.53 6.25 4.5 5.47 6.25 4.5 6.25zM17 17h-3v-4.75c0-1.13-.02-2.58-1.57-2.58-1.57 0-1.81 1.23-1.81 2.5V17H8V7.5h2.88v1.31h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.59V17z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.53A8.35 8.35 0 0020 3.92a8.2 8.2 0 01-2.36.65 4.12 4.12 0 001.8-2.27 8.22 8.22 0 01-2.6 1 4.1 4.1 0 00-6.99 3.74 11.65 11.65 0 01-8.45-4.3 4.1 4.1 0 001.27 5.48A4.07 4.07 0 01.8 7.71v.05a4.1 4.1 0 003.3 4.03 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Platform</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#domains">Domains</a></li>
              <li><a href="#objectives">Objectives</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@skillbridge.vn">info@skillbridge.vn</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Partnership</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Skill Bridge. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer