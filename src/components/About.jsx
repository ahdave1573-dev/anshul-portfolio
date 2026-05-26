import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="fade-in">About <span>Me</span></h2>
                <div className="about-content fade-in">
                    <div className="about-text">
                        <p>
                            I am a recent BCA Graduate (CGPA 8.23) from Atmiya University, skilled in Android (Java)
                            and Full-Stack Web Development (PHP, MySQL, Python). Experienced in building
                            e-commerce platforms and Web/View-based games. Passionate about problem-solving
                            and seeking an entry-level role in Web or Android App Development.
                        </p>
                        <p>
                            I have experience in building real-world applications including
                            E-commerce platforms, Food Ordering Systems, and mobile games.
                            I am particularly skilled in PHP, MySQL, Java, and Android Studio,
                            with a growing interest in modern Python-based web frameworks like Flask.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h4>8.23</h4>
                                <p>CGPA</p>
                            </div>
                            <div className="stat-item">
                                <h4>10+</h4>
                                <p>Projects Done</p>
                            </div>
                            <div className="stat-item">
                                <h4>2nd</h4>
                                <p>Hackathon Rank</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
