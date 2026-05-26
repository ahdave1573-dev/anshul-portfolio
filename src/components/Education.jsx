import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="fade-in">Education & <span>Strengths</span></h2>
                <div className="edu-grid">
                    <div className="edu-card fade-in">
                        <div className="icon">🎓</div>
                        <h3>Bachelor of Computer Applications (BCA)</h3>
                        <h5>Atmiya University, Rajkot</h5>
                        <span className="duration">2023 - 2026</span>
                        <p>Maintained a CGPA of 8.23. Deeply involved in software development and competitive programming.</p>
                    </div>
                    <div className="strengths-card fade-in">
                        <h3>My Core Strengths</h3>
                        <ul className="strength-list">
                            <li><span>✓</span> Quick learner of new tech</li>
                            <li><span>✓</span> Strong problem-solving skills</li>
                            <li><span>✓</span> Team player & Proven Leader</li>
                            <li><span>✓</span> Passionate about clean code</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
