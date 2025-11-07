import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-links">
          <a 
            href="https://github.com/Kishanmp3" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="link-text">GitHub</span>
            <span className="link-arrow">→</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/kishan-patel-47a114250/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span className="link-text">LinkedIn</span>
            <span className="link-arrow">→</span>
          </a>
          <a 
            href="mailto:kishanmp3@gmail.com" 
            className="contact-link"
          >
            <span className="link-text">Email</span>
            <span className="link-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

