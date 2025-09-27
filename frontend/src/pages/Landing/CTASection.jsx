import React from 'react'
import './CTASection.css'
import { useNavigate } from 'react-router-dom'

const CTASection = () => {
  const navigate = useNavigate()

  const generateGuestRoute = () => {
    const randomNum = Math.floor(Math.random() * 9000) + 1000; // generates number between 1000-9999
    return `/guestmeet${randomNum}`;
  }

  return (
    <section className="cta">
      <div className="cta-content">
        <h2 className="cta-title">Ready to Connect?</h2>
        <p className="cta-subtitle">
          Start your first video call today and experience the difference
        </p>
        <div className="cta-buttons">
          <button onClick={() => navigate(generateGuestRoute())} className="cta-btn-primary">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            Join as Guest
          </button>
          <button onClick={() => navigate('/auth')} className="cta-btn-secondary">
            <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Register
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
