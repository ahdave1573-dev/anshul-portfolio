import React from 'react';
import './Projects.css';

const projectsData = [
    {
        title: "All In One Bazaar – E-commerce Marketplace",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        desc: "A comprehensive e-commerce platform featuring dynamic product listings, secure user authentication, and seamless cart management.",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
        liveLink: "http://allinonebazaar.infinityfreeapp.com",
        githubLink: "https://github.com/ahdave1573-dev/All-In-One-Bazaar.git"
    },
    {
        title: "DigitalBazaar – E-commerce Website",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        desc: "A full-stack e-commerce platform with product management, shopping cart, and admin panel.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
        githubLink: "https://github.com/ahdave1573-dev/Digital-Bazaar.git"
    },
    {
        title: "Online Food Ordering System",
        tech: ["PHP", "MySQL"],
        desc: "Dynamic food ordering website with login, signup, session-based cart, and admin dashboard.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
        githubLink: "https://github.com/ahdave1573-dev/QuickBite-Online-Food-Ordering-System.git"
    },
    {
        title: "Sky Jumper – Android Game",
        tech: ["Java", "Android Studio"],
        desc: "A 2D jumping game featuring gravity physics, collision detection, and high score tracking.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
        githubLink: "#"
    },
    {
        title: "Family Tracker App – User Connectivity",
        tech: ["Java", "Android Studio", "Firebase"],
        desc: "Advanced GPS tracking system allowing real-time location sharing and route history between multiple family members.",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
        githubLink: "https://github.com/ahdave1573-dev/Family_Tracker_.git"
    },
    {
        title: "Smart Document Merge System",
        tech: ["Python (Flask)", "SQLite", "JS"],
        desc: "Web-based tool for uploading, converting, and merging multiple documents securely.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
        githubLink: "https://github.com/ahdave1573-dev/SmartDocumentMerge.git"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="fade-in">Selected <span>Projects</span></h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card fade-in">
                            <div className="project-img">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://via.placeholder.com/600x400/f8fafc/6366f1?text=" + encodeURIComponent(project.title);
                                    }}
                                />
                                <div className="project-overlay"></div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <div className="project-tech">
                                    {project.tech.map((t, idx) => <span key={idx}>{t}</span>)}
                                </div>
                                <p>{project.desc}</p>
                                <div className="project-links">
                                    <a href={project.liveLink || "#"}
                                        className={`p-btn ${project.liveLink ? 'p-btn-alt' : 'p-btn-disabled'}`}
                                        target={project.liveLink ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo <span>↗</span>
                                    </a>
                                    <a href={project.githubLink || "#"} 
                                        className="p-btn-icon" 
                                        title="View Code"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
