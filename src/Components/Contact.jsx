import React, { useState } from 'react';
import { Mail, Linkedin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function ContactCTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-grid">
            <div className="info-panel">
              <div className="info-content">
                <div className="info-header">
                  <h2 className="info-title">Let's Build Something Great</h2>
                  <p className="info-subtitle">
                    Looking for a product manager who can transform ideas into impactful products? Let's connect.
                  </p>
                </div>

                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <MessageSquare className="icon" />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">Product Strategy</h3>
                      <p className="feature-description">Vision, roadmaps, and go-to-market planning</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">
                      <Mail className="icon" />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">User-Centric Design</h3>
                      <p className="feature-description">Data-driven decisions that delight users</p>
                    </div>
                  </div>

                  <div className="feature-item">
                    <div className="feature-icon">
                      <Linkedin className="icon" />
                    </div>
                    <div className="feature-content">
                      <h3 className="feature-title">Cross-Functional Leadership</h3>
                      <p className="feature-description">Bridging engineering, design, and business</p>
                    </div>
                  </div>
                </div>

                <div className="social-section">
                  <p className="social-label">Connect with me on:</p>
                  <div className="social-buttons">
                    <button className="social-button">
                      <Linkedin className="social-icon" />
                    </button>
                    <button className="social-button">
                      <Mail className="social-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-panel">
              {!formSubmitted ? (
                <div className="form-content">
                  <div className="form-header">
                    <h3 className="form-title">Get in Touch</h3>
                    <p className="form-subtitle">
                      Share your project details and I'll get back to you within 24 hours.
                    </p>
                  </div>

                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-textarea"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`submit-button ${isHovered ? 'hovered' : ''}`}
                  >
                    <span>Send Message</span>
                    <Send className="send-icon" />
                  </button>
                </div>
              ) : (
                <div className="success-state">
                  <div className="success-content">
                    <div className="success-icon-wrapper">
                      <CheckCircle className="success-icon" />
                    </div>
                    <h3 className="success-title">Message Sent!</h3>
                    <p className="success-message">Thanks for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}