import React from 'react'
import './HeroSection.css'
import { Link, useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const router = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Connect instantly<br />
            with NodeLink
          </h1>
          <p className="hero-description">
            Experience seamless video calling with crystal clear quality.
            Join meetings instantly, share screens, and collaborate with
            teams worldwide.
          </p>
          <div className="hero-buttons">
            {/* <button className="btn-primary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Get Started
            </button> */}
            <button onClick={() => router('/auth')} className="btn-primary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Get Started
            </button>
            <button onClick={() => router('/home')} className="btn-secondary">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
              </svg>
              Join Meeting
            </button>
          </div>
        </div>
        <div className="hero-preview">
          <div className="preview-container">
            <img src="/media/vc-interface.png" className="preview-image" alt="Video Call Interface Preview" />
            {/* <p className="preview-text">Video Call Interface Preview</p> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
