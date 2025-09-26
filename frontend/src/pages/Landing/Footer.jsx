import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img className='logo-icon' src="/logo.svg" alt="logo" />
              </div>
              <span className="logo-text">NodeLink</span>
            </div>
            <p className="footer-description">
              The next generation video calling platform designed for
              seamless communication.
            </p>
            <div className="social-links">
              <a href="https://github.com/akshatpawar/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.303 3.492.996.108-.774.418-1.303.76-1.603-2.665-.303-5.467-1.337-5.467-5.945 0-1.313.468-2.386 1.236-3.228-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.3 1.23a11.39 11.39 0 0 1 3-.404c1.018.005 2.043.137 3 .404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.242 2.873.118 3.176.77.842 1.236 1.915 1.236 3.228 0 4.618-2.807 5.638-5.48 5.935.43.37.815 1.1.815 2.222v3.293c0 .32.216.694.825.576C20.565 22.298 24 17.797 24 12.5 24 5.87 18.627.5 12 .5z" />
                </svg>
              </a>
              <a href="https://twitter.com/akshat19p/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/akshatpawar/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-group-title">MY PROJECTS</h4>
              <ul className="link-list">
                <li><a href="https://tradenovax-frontend.onrender.com/" target='_blank' rel="noopener noreferrer" className="footer-link">TradeNovaX</a></li>
                <li><a href="https://minimind-ai-search.vercel.app/" target='_blank' rel="noopener noreferrer" className="footer-link">MiniMind</a></li>
                <li><a href="https://akshatpawar.pages.dev/" target='_blank' rel="noopener noreferrer" className="footer-link">Portfolio</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4 className="link-group-title">SOCIALS</h4>
              <ul className="link-list">
                <li><a href="https://github.com/akshatpawar/" target='_blank' rel="noopener noreferrer" className="footer-link">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/akshatpawar/" target="_blank" rel="noopener noreferrer" className="footer-link">Linkedin</a></li>
                <li><a href="https://twitter.com/akshat19p/" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© 2025 NodeLink by Akshat Pawar. All rights reserved.
</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
