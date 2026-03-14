import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";
import { Typewriter } from "react-simple-typewriter";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    // Circle and Line animations removed

    gsap.fromTo(".modern-hero", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".modern-hero",
          scroll: "body",
          scrub: 2,
          start: "top 80%",
          end: "top 30%"
        },
      }
    );

    gsap.fromTo(".timeline-item", 
      { x: -50, opacity: 0 },
      {
        x: 0,
        duration: 0.8,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".education",
          scroll: "body",
          scrub: 2,
          start: "top 80%",
          end: "top 30%"
        },
      }
    );

    gsap.fromTo(".skill-category", 
      { y: 40, opacity: 0 },
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".skills",
          scroll: "body",
          scrub: 2,
          start: "top 90%",
          end: "top 70%"
        },
      }
    );

    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scroll: "body",
        scrub: 2,
        start: "top 60%",
        end: "top 30%",
      },
    });
  });

  return (
    <div id="about">
      <div className="leftabout">


        <div className="aboutdetails">
          {/* PERSONAL INFO SECTION */}
          <div className="personalinfo modern-hero">
            <div className="hero-left">
              <h1 className="gradient-text">Aman Mourya</h1>
              <h2 className="animated-role">
                <Typewriter
                  words={["FULL STACK DEVELOPER", "SOFTWARE DEVELOPER", "VIBE CODER"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
            </div>
            <div className="hero-right">
              <a href="mailto:amanmourya1111198@gmail.com" className="info-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>amanmourya1111198@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/aman-mourya01/" target="_blank" rel="noopener noreferrer" className="info-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span style={{ color: "#6366f1", fontWeight: "600" }}>LinkedIn Profile</span>
              </a>
              <div className="info-card">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Bhopal, Madhya Pradesh, India</span>
              </div>
              <div className="info-card quick-intro">
                <span>Passionate about building scalable web applications, integrating AI APIs, and creating responsive modern user interfaces.</span>
              </div>
            </div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="education">
            <h1 className="section-title">Education</h1>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div className="timeline-content">
                  <h3>B.Tech - CSE (AI & ML)</h3>
                  <p className="institute">LNCTE, Bhopal</p>
                  <span className="year">2022 - 2026</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div className="timeline-content">
                  <h3>12th (PCM)</h3>
                  <p className="institute">Deepmala Pagarani Sanskar Public School</p>
                  <div className="timeline-meta">
                    <span className="year">2020 - 2021</span>
                    <span className="score-badge">86.4%</span>
                  </div>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                </div>
                <div className="timeline-content">
                  <h3>10th</h3>
                  <p className="institute">Deepmala Pagarani Sanskar Public School</p>
                  <div className="timeline-meta">
                    <span className="year">2018 - 2019</span>
                    <span className="score-badge">84%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div className="skills">
            <h1 className="section-title">Skills</h1>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Programming</h3>
                <div className="skill-tags">
                  <span className="skill-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg> Java</span>
                  <span className="skill-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg> JavaScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Web</h3>
                <div className="skill-tags">
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">Tailwind</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Database</h3>
                <div className="skill-tags">
                  <span className="skill-tag"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg> MongoDB</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">VS Code</span>
                  <span className="skill-tag">Gemini API</span>
                  <span className="skill-tag">Antigravity</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Core</h3>
                <div className="skill-tags">
                  <span className="skill-tag">DSA</span>
                  <span className="skill-tag">OOP</span>
                  <span className="skill-tag">MVC</span>
                  <span className="skill-tag">RESTful APIs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rightabout">
        <Card title="MERN STACK WEB DEVELOPER" image={mern} />
        <Card title="JAVA" image={java} />
        <Card title="DSA" image={dsa} />
      </div>
    </div>
  );
}

export default About;