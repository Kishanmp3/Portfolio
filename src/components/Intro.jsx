import React, { useState } from "react";
import Nav from "./Nav";
import legoImage from "../img/13BDDC18-8F8B-44E7-8090-A92DDC58234B-removebg-preview.png";
import profileImage from "../img/IMG_1600.jpg";
import resumePdf from "../img/Kishan Patel Resume.pdf";
import "./Intro.css";

function Intro() {
  const [showBubble, setShowBubble] = useState(false);

  return (
    <section id="intro" className="intro-section">
      <Nav />
      <div className="intro-container">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="intro-greeting">Hey, I'm Kishan!</h1>
            <p className="intro-role">
              I am currently a 4th Year Computer Science Student at Georgia
              Tech.
            </p>
            <p className="intro-interests">
              My interests are in Full Stack Development, AI, and Solutions
              Engineering.
            </p>
            <p className="intro-philosophy">
              With a detail-oriented focus, I enjoy creating simple but
              effective solutions to improve application performance, ease of
              maintenance, and user experience.
            </p>
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Get My Resume
            </a>
          </div>
          <div className="intro-image-container">
            <div className="intro-image-wrapper">
              <div
                className="lego-wrapper"
                onMouseEnter={() => setShowBubble(true)}
                onMouseLeave={() => setShowBubble(false)}
              >
                <img
                  src={legoImage}
                  alt="Lego decoration"
                  className="lego-decoration"
                />
              </div>
              <div className="intro-image-placeholder">
                <img
                  src={profileImage}
                  alt="Austin"
                  className="profile-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`speech-bubble ${showBubble ? "show" : ""}`}>
        Hey, you should hire me!
      </div>
    </section>
  );
}

export default Intro;
