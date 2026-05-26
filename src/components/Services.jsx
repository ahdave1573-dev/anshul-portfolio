import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            description: "Building responsive, high-performance websites using modern frameworks like React and Vite.",
            icon: "💻"
        },
        {
            title: "Android App Development",
            description: "Creating native Android applications with Java and Android Studio, focusing on UX and performance.",
            icon: "📱"
        },
        {
            title: "UI/UX Design",
            description: "Designing intuitive and visually appealing user interfaces that provide exceptional user experiences.",
            icon: "🎨"
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header fade-in">
                    <h5>WHAT I OFFER</h5>
                    <h2>My <span>Services</span></h2>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card fade-in">
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
