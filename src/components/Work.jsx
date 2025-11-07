import React from 'react'
import southernSwingLogo from '../img/ChatGPT_Image_Nov_6__2025__11_29_30_PM-removebg-preview.png'
import eteLogo from '../img/eteete-removebg-preview.png'
import motorolaLogo from '../img/ChatGPT_Image_Nov_6__2025__11_27_56_PM-removebg-preview.png'
import uiPathLogo from '../img/ui-removebg-preview.png'
import dataTorchLogo from '../img/3f3dcd77-1b87-4dc4-8fdb-39cc2e24e87a-removebg-preview.png'
import robotCollectiveLogo from '../img/gt-seal_0.png'
import echoBoardLogo from '../img/ChatGPT_Image_Nov_6__2025__11_31_35_PM-removebg-preview.png'
import './Work.css'

const workExperience = [
  {
    company: 'ETE (Startup)',
    title: 'Co-Founder / CTO',
    date: 'Aug 2025 – Present',
    description: 'Co-founded a remote will-signing platform built with React, Supabase, and OpenSign. The app lets clients, witnesses, and lawyers securely sign documents through live video calls. Handled backend security, session logic, and pitching the product to lawyers and estate firms to validate the idea.',
    logo: eteLogo
  },
  {
    company: 'Southern Swing Golf',
    title: 'Software Engineer',
    date: 'Aug 2025 – Present',
    description: 'Developed a full-stack golf tournament platform using React, Node.js, and Supabase. Designed real-time scorecards, leaderboards, and role-based access for organizers and players. Loved combining tech and sports to create something engaging and practical.',
    logo: southernSwingLogo
  },
  {
    company: 'EchoBoard',
    title: 'Co-Founder',
    date: 'Jan 2025 – May 2025',
    description: "Co-founded an AI-powered survey platform through Georgia Tech's Create-X program. Designed and built interactive dashboards, real-time PDF reporting, and secure team workflows using GPT-4.1-nano. The goal was simple — make it easier for teams to turn messy qualitative feedback into clear, actionable insights.",
    logo: echoBoardLogo
  },
  {
    company: 'Motorola Solutions',
    title: 'PreSales Systems Engineering Intern',
    date: 'May 2025 – Aug 2025',
    description: 'Worked on optimizing radio and dispatch systems that keep first responders connected. Focused on improving coverage data, site reliability, and performance. The best part was seeing the direct impact of tech on public safety operations.',
    logo: motorolaLogo
  },
  {
    company: 'UiPath',
    title: 'Software + Solutions Engineering Intern',
    date: 'Jun 2024 – Aug 2024',
    description: 'Blended software development with automation problem-solving. Built a feature flag system using React and GraphQL, and developed automation tools powered by RPA and AI. The experience showed how smart software can simplify real-world workflows for both teams and clients.',
    logo: uiPathLogo
  },
  {
    company: 'DataTorch',
    title: 'Software Engineering Intern',
    date: 'Jul 2023 – Apr 2024',
    description: 'Rebuilt front-end components and improved app speed by migrating from Vue to React. Optimized GraphQL queries for smoother data flow and better performance across thousands of users. Learned a ton about scalable design and clean, maintainable code.',
    logo: dataTorchLogo
  },
  {
    company: 'The Robot Collective',
    title: 'Software Engineering Intern',
    date: 'Jan 2023 – Dec 2023',
    description: 'Worked on autonomous robotics projects using A* and D* pathfinding with ROS. Helped improve navigation, communication, and energy efficiency for multi-robot systems. Seeing code translate into real robot movement was a highlight.',
    logo: robotCollectiveLogo
  }
]

function Work() {
  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <h2 className="work-title">Work Experience</h2>
        <div className="work-list">
          {workExperience.map((work, index) => (
            <div key={index} className="work-item work-item-card">
              <div className="work-header">
                <div className="work-info-wrapper">
                  {work.logo && (
                    <img src={work.logo} alt={`${work.company} Logo`} className="company-logo" />
                  )}
                  <div>
                    <h3 className="work-company">{work.company}</h3>
                    <p className="work-title-text">{work.title}</p>
                  </div>
                </div>
                <span className="work-date">{work.date}</span>
              </div>
              <p className="work-description">{work.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
