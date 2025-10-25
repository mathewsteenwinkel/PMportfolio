import React from 'react';
import { Shield, Lock, FileCheck, Database, AlertCircle, CheckCircle } from 'lucide-react';
import './Awareness.css';

export default function FintechAwareness() {
  const considerations = [
    {
      icon: Shield,
      title: "Security First",
      items: [
        "Multi-layered security architecture",
        "Encryption at rest and in transit",
        "Regular security audits and penetration testing",
        "Secure authentication and authorization"
      ]
    },
    {
      icon: Lock,
      title: "Data Privacy",
      items: [
        "User data protection and privacy by design",
        "Compliance with data protection regulations",
        "Transparent data handling practices",
        "Secure data storage and access controls"
      ]
    },
    {
      icon: FileCheck,
      title: "Regulatory Awareness",
      items: [
        "Understanding of financial regulations (KYC/AML)",
        "PCI-DSS compliance for payment processing",
        "GDPR and privacy law considerations",
        "Audit trails and compliance reporting"
      ]
    },
    {
      icon: Database,
      title: "Risk Management",
      items: [
        "Fraud detection and prevention strategies",
        "Transaction monitoring and anomaly detection",
        "Business continuity and disaster recovery",
        "Incident response and crisis management"
      ]
    },
    {
      icon: CheckCircle,
      title: "Trust & Transparency",
      items: [
        "Clear communication of fees and terms",
        "Transparent error handling and user notifications",
        "Building user confidence through design",
        "Honest marketing and realistic expectations"
      ]
    },
    {
      icon: AlertCircle,
      title: "User Protection",
      items: [
        "Financial literacy and education features",
        "Safeguards against user errors",
        "Clear consent and permission flows",
        "Responsible lending and spending practices"
      ]
    }
  ];

  return (
    <section className="fintech-wrapper">
      <div className="fintech-container">
        <div className="fintech-header">
          <h2 className="fintech-title">Building for Fintech</h2>
          <p className="fintech-subtitle">
            Understanding the unique challenges and requirements of financial technology products
          </p>
        </div>

        <div className="fintech-notice">
          <AlertCircle className="notice-icon" />
          <div className="notice-content">
            <h3 className="notice-title">Compliance-Conscious Product Thinking</h3>
            <p className="notice-text">
              While I'm building direct regulatory compliance expertise, I understand that fintech products require 
              a fundamentally different approach—balancing innovation with security, speed with risk management, 
              and user experience with regulatory requirements. I prioritize working closely with compliance and 
              legal teams from day one.
            </p>
          </div>
        </div>

        <div className="considerations-grid">
          {considerations.map((consideration, index) => {
            const IconComponent = consideration.icon;
            return (
              <div key={index} className="consideration-card">
                <div className="consideration-header">
                  <div className="consideration-icon-wrapper">
                    <IconComponent className="consideration-icon" />
                  </div>
                  <h3 className="consideration-title">{consideration.title}</h3>
                </div>
                <ul className="consideration-list">
                  {consideration.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="consideration-item">
                      <CheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="fintech-approach">
          <h3 className="approach-title">My Approach to Fintech Product Development</h3>
          <div className="approach-grid">
            <div className="approach-item">
              <span className="approach-number">01</span>
              <div className="approach-content">
                <h4 className="approach-item-title">Compliance as a Feature</h4>
                <p className="approach-text">
                  I treat regulatory requirements not as constraints but as product features that build trust 
                  and competitive advantage.
                </p>
              </div>
            </div>
            <div className="approach-item">
              <span className="approach-number">02</span>
              <div className="approach-content">
                <h4 className="approach-item-title">Security in Every Sprint</h4>
                <p className="approach-text">
                  Security and privacy considerations are baked into every user story, design decision, 
                  and technical implementation.
                </p>
              </div>
            </div>
            <div className="approach-item">
              <span className="approach-number">03</span>
              <div className="approach-content">
                <h4 className="approach-item-title">Cross-Functional Collaboration</h4>
                <p className="approach-text">
                  I work closely with legal, compliance, and security teams to ensure products meet all 
                  requirements without sacrificing user experience.
                </p>
              </div>
            </div>
            <div className="approach-item">
              <span className="approach-number">04</span>
              <div className="approach-content">
                <h4 className="approach-item-title">Continuous Learning</h4>
                <p className="approach-text">
                  I stay current on fintech regulations, security best practices, and industry standards 
                  through ongoing education and professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}