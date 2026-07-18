import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        
        if (!formData.email.trim()) {
            tempErrors.email = "Email is required.";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            tempErrors.email = "Invalid email address.";
        }
        
        if (!formData.message.trim()) tempErrors.message = "Message is required.";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        const phoneNumber = "+918849919418"; // Matches contact info
        const text = `*New Contact Form Submission*\n\n*Name:* ${formData.name.trim()}\n*Email:* ${formData.email.trim()}\n*Message:* ${formData.message.trim()}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        const emailAddress = "ahdave1573@gmail.com";
        const subject = `New Contact from ${formData.name.trim()}`;
        const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-header fade-in">
                    <h5>GET IN TOUCH</h5>
                    <h2>Contact <span>Information</span></h2>
                    <p className="subtitle">
                        Open for new opportunities and collaborations. Feel free to reach out via the provided channels or the contact form below.
                    </p>
                </div>

                <div className="contact-wrapper">
                    <div className="contact-details fade-in">
                        <div className="detail-item">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="detail-info">
                                <h6>Email Address</h6>
                                <p>ahdave1573@gmail.com</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.81 12.81 0 0 0 .62 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.62A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="detail-info">
                                <h6>Phone Number</h6>
                                <p>+91 88499 19418</p>
                            </div>
                        </div>
                        <div className="detail-item">
                            <div className="icon-box">
                                <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="detail-info">
                                <h6>Location</h6>
                                <p>Rajkot, Gujarat, India</p>
                            </div>
                        </div>

                        <div className="contact-socials">
                            <a href="https://linkedin.com/in/anshul-dave-" target="_blank" rel="noreferrer" className="social-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://github.com/ahdave1573-dev" target="_blank" rel="noreferrer" className="social-icon">
                                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container fade-in">
                        <form className="contact-form" noValidate>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>NAME</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'input-error' : ''}
                                    />
                                    {errors.name && <span className="error-text" style={{color: 'red', fontSize: '12px', marginTop: '5px', display: 'block'}}>{errors.name}</span>}
                                </div>
                                <div className="form-group">
                                    <label>EMAIL</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'input-error' : ''}
                                    />
                                    {errors.email && <span className="error-text" style={{color: 'red', fontSize: '12px', marginTop: '5px', display: 'block'}}>{errors.email}</span>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label>MESSAGE</label>
                                <textarea
                                    name="message"
                                    placeholder="How can I help you?"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'input-error' : ''}
                                ></textarea>
                                {errors.message && <span className="error-text" style={{color: 'red', fontSize: '12px', marginTop: '5px', display: 'block'}}>{errors.message}</span>}
                            </div>
                            <div className="submit-buttons" style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                                <button type="button" onClick={handleWhatsAppSubmit} className="submit-btn btn-whatsapp" style={{ flex: 1, justifyContent: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    WhatsApp
                                </button>
                                <button type="button" onClick={handleEmailSubmit} className="submit-btn btn-email" style={{ flex: 1, justifyContent: 'center' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    Email
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="footer-mini">
                    <p>&copy; 2026 <span>Dave Anshul</span>. Built with ❤️ and React.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
