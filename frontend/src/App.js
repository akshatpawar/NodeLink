// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import LandingPage from './pages/Landing/LandingPage.jsx';
import Authentication from './pages/authentication.jsx';
import HomeComponent from './pages/Home/home.jsx';
import VideoMeetComp from './pages/VideoMeet/VideoMeet.jsx';
import History from './pages/History/history.jsx';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/home" element={<HomeComponent />} />
            <Route path="/history" element={<History />} />
            <Route path="/:url" element={<VideoMeetComp />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
