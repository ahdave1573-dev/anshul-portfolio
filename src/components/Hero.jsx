import React from 'react';
import './Hero.css';
import profileImg from '../assets/profile.png'; 
import resumeFile from '../assets/Anshul Dave Resume.pdf'; 

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-wrapper">
                <div className="hero-text-container fade-in">
                    <div className="status-badge">
                        <span className="dot"></span>
                        Available for New Opportunities
                    </div>

                    <h1 className="hero-title">
                        Hello, I'm <br />
                        <span className="highlight">Dave Anshul.</span>
                    </h1>

                    <h3 className="hero-subtitle">
                        Web & Android Developer
                    </h3>

                    <p className="hero-description">
                        Recent BCA Graduate (CGPA 8.23) from Atmiya University, skilled in Android (Java)
                        and Full-Stack Web Development (PHP, MySQL, Python). Proven Team Leader —
                        secured 2nd Runner-Up at ADSC Hackathon 2.0.
                    </p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn-solid">Discover My Work <span>→</span></a>
                        <a href={resumeFile} download="Anshul_Dave_Resume.pdf" className="btn-outline-dark">
                            Download Resume
                        </a>
                    </div>

                    <div className="hero-social-connect">
                        <span className="connect-label">CONNECT:</span>
                        <div className="social-links-minimal">
                            <a href="mailto:ahdave1573@gmail.com" title="Email" className="social-icon-circle">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </a>
                            <a href="https://github.com/ahdave1573-dev" target="_blank" rel="noreferrer" title="GitHub" className="social-icon-circle">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                            <a href="https://linkedin.com/in/anshul-dave-" target="_blank" rel="noreferrer" title="LinkedIn" className="social-icon-circle">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="hero-visual-container fade-in">
                    <div className="profile-circle-wrapper">
                        <div className="profile-circle">

                            <img src={profileImg} alt="Dave Anshul" className="hero-profile-img" />
                        </div>
                        <div className="floating-status-card">
                            <div className="status-icon">✓</div>
                            <div className="status-text">
                                <span className="status-label">STATUS</span>
                                <span className="status-value">Ready to Work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;