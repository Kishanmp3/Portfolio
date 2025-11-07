import React from 'react'
import './Nav.css'

function Nav() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }

  return (
    <nav className="nav-bar">
      <button onClick={() => scrollToSection('intro')} className="nav-link">
        Intro
      </button>
      <button onClick={() => scrollToSection('work')} className="nav-link">
        Work
      </button>
      <button onClick={() => scrollToSection('projects')} className="nav-link">
        Projects
      </button>
      <button onClick={() => scrollToSection('contact')} className="nav-link">
        Contact
      </button>
    </nav>
  )
}

export default Nav

