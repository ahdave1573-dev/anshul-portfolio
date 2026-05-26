import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2 className="fade-in">Experience & <span>Awards</span></h2>
                <div className="timeline">
                    <div className="timeline-item fade-in">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Android Development Training</h3>
                            <h5>Internship · Role: Android Developer Intern</h5>
                            <p>
                                Developed Android applications using Java and Android Studio.
                                Worked with RecyclerView, navigation components, and Material UI design patterns.
                                Implemented SQLite CRUD operations and Firebase integration.
                                Built mini-projects: login system, splash screen, and real-time chat application.
                            </p>
                        </div>
                    </div>
                    <div className="timeline-item fade-in">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>ADSC Hackathon 2.0 – Atmiya University</h3>
                            <h5>2nd Runner-Up | Team Phantom</h5>
                            <p>
                                Led a team to secure 2nd rank out of multiple participating teams.
                                Built 'Family Tracker', a live GPS tracking application with advanced features
                                like real-time location sharing, SOS, and geofencing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
