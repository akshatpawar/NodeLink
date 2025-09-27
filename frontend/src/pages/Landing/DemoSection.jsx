import React from 'react'
import './DemoSection.css'

const DemoSection = () => {
  return (
    <section className="demo">
      <div className="demo-content">
        <div className="demo-header">
          <h2 className="demo-title">See NodeLink in Action</h2>
          <p className="demo-subtitle">Experience the future of video communication</p>
        </div>
        <div className="demo-video">
          <iframe className="video-placeholder" src="https://drive.google.com/file/d/1AgJS6VI40_9kM8KyYWlwVwCLqk9gh16L/preview" width="100%" height="auto" allow="autoplay" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  )
}

export default DemoSection
