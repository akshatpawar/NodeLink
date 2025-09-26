import React from 'react'
import './FeaturesSection.css'

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1024 1024"><path fill="#000000" d="M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z" /><path fill="#000000" d="M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z" /></svg>
      ),
      title: 'Instant Connection',
      description: 'Join calls in seconds with no downloads required. Just click and connect.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" fill="#000000"><g id="galaSecure0" fill="none" stroke="#000000" strokeDasharray="none" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="4" strokeOpacity="1" strokeWidth="16"><path id="galaSecure1" d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257"/><path id="galaSecure2" d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511"/><path id="galaSecure3" d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257"/><path id="galaSecure4" d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509"/><path id="galaSecure5" d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502"/></g></svg>
      ),
      title: 'Secure & Private',
      description: 'End-to-end encryption ensures your conversations stay completely private.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-2 -3 24 24"><path fill="#000000" d="M3 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm0-2h14a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm4 16h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" /></svg>
      ),
      title: 'Screen Sharing',
      description: 'Share your screen seamlessly for presentations and collaborative work.'
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21.25a9.25 9.25 0 1 0-8.307-5.177c.108.22.144.468.089.706l-.816 3.536a.6.6 0 0 0 .72.72l3.535-.817a1.06 1.06 0 0 1 .706.09A9.2 9.2 0 0 0 12 21.25M7.97 9.886h8.06m-8.06 4.228h5.748" /></svg>),
      title: 'Real-time Chat',
      description: 'Text chat alongside video calls for quick messages and links.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#000000" fillRule="evenodd" d="M11.25 2a.75.75 0 0 1 .75-.75c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12a.75.75 0 0 1 1.5 0A9.25 9.25 0 1 0 12 2.75a.75.75 0 0 1-.75-.75ZM12 8.25a.75.75 0 0 1 .75.75v3.25H16a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 .75-.75ZM9.1 2.398a.75.75 0 0 1-.43.97a9.187 9.187 0 0 0-.42.173a.75.75 0 1 1-.608-1.37c.16-.072.323-.14.488-.203a.75.75 0 0 1 .97.43ZM5.648 4.24a.75.75 0 0 1-.026 1.06a9.31 9.31 0 0 0-.321.322a.75.75 0 1 1-1.087-1.035c.122-.127.246-.251.373-.373a.75.75 0 0 1 1.06.026ZM3.16 7.261a.75.75 0 0 1 .381.99c-.061.138-.12.278-.174.419a.75.75 0 0 1-1.399-.54c.063-.165.13-.327.202-.488a.75.75 0 0 1 .99-.381Z" clipRule="evenodd"/></svg>
      ),
      title: 'Meeting History',
      description: 'Access past meetings and chat history for better collaboration.'
    },
    {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="#000000" d="M22 17V7H6v10h16m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6v2h2v2h-8v-2h2v-2H6c-1.11 0-2-.89-2-2V7a2 2 0 0 1 2-2h16M2 3v12H0V3a2 2 0 0 1 2-2h18v2H2Z"/></svg>),
      title: 'Multi-device Support',
      description: 'Access from any device, ensuring seamless communication on the go.'
    }
  ]

  return (
    <section className="features">
      <div className="features-content">
        <div className="features-header">
          <h2 className="features-title">Why Choose NodeLink?</h2>
          <p className="features-subtitle">
            Built for modern teams who need reliable, high-quality video communication
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
