import React from 'react'
import './home.css'
import { useNavigate, Link} from 'react-router-dom'

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
                    {/* <a href="/history" className="nav-link">History</a>
                    <a href="/home" className="nav-link">Home</a> */}
                    <Link to="/history" className="nav-link">History</Link>
                    <Link to="/home" className="nav-link">Home</Link>
                    <button
                        className="login-btn"
                        onClick={() => {
                            localStorage.removeItem("token");
                            router('/auth')
                        }}>Log Out</button>
                </nav>
            </div>
        </header>
    )
}

export default Header
