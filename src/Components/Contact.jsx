import React, { useState } from 'react';
import { Mail, Linkedin, MessageSquare, ArrowRight } from 'lucide-react';
import './Contact.css';

export default function ContactCTA() {
  const [emailHovered, setEmailHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-card">
          <div className="cta-content">
            <div className="cta-header">
              <h2 className="cta-title">Let's Build Something Great Together</h2>
              <p className="cta-subtitle">
                Looking for a product manager who can transform ideas into impactful products? 
                I'd love to hear about your project or opportunity.
              </p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <MessageSquare className="feature-icon" />
                </div>
                <h3 className="feature-title">Product Strategy</h3>
                <p className="feature-description">
                  Vision, roadmaps, and go-to-market planning
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Mail className="feature-icon" />
                </div>
                <h3 className="feature-title">User-Centric Design</h3>
                <p className="feature-description">
                  Data-driven decisions that delight users
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <Linkedin className="feature-icon" />
                </div>
                <h3 className="feature-title">Cross-Functional Leadership</h3>
                <p className="feature-description">
                  Bridging engineering, design, and business
                </p>
              </div>
            </div>

            <div className="cta-actions">
              <a 
                href="mailto:mathewsteenwinkel@gmail.com"
                className={`cta-button primary ${emailHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setEmailHovered(true)}
                onMouseLeave={() => setEmailHovered(false)}
              >
                <Mail className="button-icon" />
                <span>Send Me an Email</span>
                <ArrowRight className="arrow-icon" />
              </a>

              <a 
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className={`cta-button secondary ${linkedinHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setLinkedinHovered(true)}
                onMouseLeave={() => setLinkedinHovered(false)}
              >
                <Linkedin className="button-icon" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="arrow-icon" />
              </a>
            </div>

            <div className="cta-footer">
              <p className="response-time">I typically respond within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}