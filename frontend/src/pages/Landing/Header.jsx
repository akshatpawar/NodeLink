import React from 'react'
import './Header.css'
import { useNavigate, Link } from 'react-router-dom'

const Header = () => {
  const router = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/">
          <div className="logo">
            <div className="logo-icon">
              <img className='logo-icon' src="/logo.svg" alt="logo" />
            </div>
            <span className="logo-text">NodeLink</span>
          </div>
        </Link>
        <nav className="nav">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/auth" className="nav-link">Join as Guest</Link>
          <Link to="/auth" className="nav-link">Register</Link>
          <button className="login-btn" onClick={() => router('/auth')}>Login</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
