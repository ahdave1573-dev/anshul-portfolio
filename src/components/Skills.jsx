import React from 'react';
import './Skills.css';

const skillsData = [
    {
        category: "Programming Languages",
        icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
        skills: ["C", "PHP", "Python", "Java"]
    },
    {
        category: "Web Technologies",
        icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
        skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Flask", "XAMPP"]
    },
    {
        category: "Android Development",
        icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>,
        skills: ["Java", "Firebase", "SQLite", "Retrofit", "Android Studio"]
    },
    {
        category: "Database",
        icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>,
        skills: ["MySQL", "Firebase", "SQLite"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header fade-in">
                    <h5>MY EXPERTISE</h5>
                    <h2>Technical <span>Skills</span></h2>
                </div>
                <div className="skills-grid">
                    {skillsData.map((item, index) => (
                        <div key={index} className="skill-card fade-in">
                            <div className="skill-category-header">
                                <div className="skill-icon-box">{item.icon}</div>
                                <h3>{item.category}</h3>
                            </div>
                            <div className="skill-list">
                                {item.skills.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
