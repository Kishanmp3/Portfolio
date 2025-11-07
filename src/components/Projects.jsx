import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "ETE (Startup)",
    description:
      "Remote will-signing app enabling live video calls and secure PDF signing for lawyers and clients. Focused on reliability, privacy, and seamless UX.",
    tags: ["React", "Supabase", "OpenSign", "Node.js", "PostgreSQL"],
  },
  {
    name: "Southern Swing Golf",
    description:
      "Full-stack golf tournament platform with live leaderboards, player profiles, and real-time scoring. Designed for organizers to manage events smoothly.",
    tags: ["React", "Node.js", "Supabase", "REST API", "Clerk"],
  },
  {
    name: "EchoBoard (Create-X AI Project)",
    description:
      "AI-powered survey platform that turns qualitative feedback into clear insights and reports for companies. Built to save teams hours of manual analysis.",
    tags: ["React", "Supabase", "OpenAI API", "Node.js", "GraphQL"],
  },
  {
    name: "DeckSearch",
    description:
      "VS Code-integrated search tool that uses LLMs for instant, relevant code and doc lookups. Designed to make developer research effortless.",
    tags: ["React", "TypeScript", "OpenAI API", "GraphQL", "Supabase"],
  },
  {
    name: "Artemis — Gamified Habit Tracking App",
    description:
      "Mobile app that turns habit tracking into a game with XP, levels, and streaks. Users can track habits in groups and view heatmap-style progress.",
    tags: ["React Native", "Supabase", "Expo", "D3.js", "PostgreSQL"],
  },
  {
    name: "Spotify Wrapped Clone",
    description:
      "Built an analytics tool that breaks down your yearly Spotify listening and adds AI-powered music recommendations. Designed to feel like a personalized music summary.",
    tags: ["Django", "Python", "OpenAI API", "Spotify API", "HTML/CSS"],
  },
  {
    name: "Employment in the UK — Info Visualization Project",
    description:
      "Created interactive visualizations to explore UK unemployment trends and regional disparities using real government datasets. Focused on clarity and usability.",
    tags: ["D3.js", "HTML", "CSS", "JavaScript", "GitHub Pages"],
  },
  {
    name: "WinSync",
    description:
      "Team-based game-tracking app where friends log match results and see group stats in real time. Built to make gaming data social and shareable.",
    tags: ["MongoDB", "React", "Node.js", "Clerk", "Supabase"],
  },
  {
    name: "Project Hub",
    description:
      "Platform for Georgia Tech students to post and join projects without joining clubs. Designed to connect builders across campus easily.",
    tags: ["React", "MongoDB", "Express", "Clerk", "Node.js"],
  },
  {
    name: "PokerBankroll",
    description:
      "Mobile app for poker players to track winnings, losses, and stake management over time. Includes graphs to visualize trends and growth.",
    tags: ["React Native", "D3.js", "Expo", "Supabase", "SQLite"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
