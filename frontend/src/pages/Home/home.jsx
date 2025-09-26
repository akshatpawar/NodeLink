import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext.jsx';
import withAuth from '../../utils/withAuth.jsx'
import './home.css'
import { Button, IconButton, TextField } from '@mui/material'
import Header from './navbar.jsx';

function HomeComponent() {
  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");


  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode)
    navigate(`/${meetingCode}`)
  }

  return (
    <div className='home-container'>
      <Header />
      <div className="home">

        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Welcome back<br />
              to NodeLink
            </h1>
            <p className="home-description">
              Connect with your team instantly — start a meeting, join with a code, or review your recent calls.
              Your hub for seamless collaboration, screen sharing, and crystal-clear video.
            </p>
            <div className='home-buttons'>

              <TextField className='btn-secondary' onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
              <button className='btn-primary' onClick={handleJoinVideoCall} variant='contained'>
                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>Join</button>

            </div>
          </div>
          <div className="home-preview">
            <div className="home-preview-container">
              <img src="/media/right-home.png" className="home-preview-image" alt="Vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withAuth(HomeComponent)