import React from 'react'
import SectionIndicator from './components/SectionIndicator'
import Intro from './components/Intro'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <SectionIndicator />
      <Intro />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

