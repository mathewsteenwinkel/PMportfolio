import React, { useState } from 'react';
import './OnBoardingCaseStudies.css';
import CaseStudyNav from "./CaseStudyNav";

export default function CaseStudy() {
  const [activeSection, setActiveSection] = useState('summary');

  const sections = {
    summary: 'Executive Summary',
    challenge: 'Business Challenge',
    approach: 'Strategic Approach',
    results: 'Results & Impact',
    lessons: 'Key Takeaways'
  };

  return (
    <div className="case-study">
      <CaseStudyNav />
      {/* Hero Section */}
      <div className="heroCase1">
        <div className="container">
          <div className="hero-label">Case Study</div>
          <h1 className="hero-title">
            Mobile-to-Web Migration:<br />Streamlining ATG's Digital Platform
          </h1>
          <p className="hero-subtitle">
            How strategic product leadership and agile execution delivered a responsive web app MVP in two months, improving conversions by 10% while reducing costs by 28%
          </p>
          
          {/* Key Metrics */}
          <div className="metrics">
            <div className="metric-card">
              <div className="metric-value">10%</div>
              <div className="metric-label">Conversion Increase</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">28%</div>
              <div className="metric-label">Cost Reduction</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">2 Months</div>
              <div className="metric-label">MVP Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-bar">
        <div className="container">
          <nav className="nav-container">
            {Object.entries(sections).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`nav-button ${activeSection === key ? 'active' : ''}`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="container">
          {activeSection === 'summary' && (
            <div className="section">
              <h2>Executive Summary</h2>
              <p className="intro-text">
                This case study examines the successful migration of ATG's mobile application to a responsive web platform. Through strategic product leadership and agile execution, the initiative delivered a streamlined MVP within two months, achieving a 10% increase in user conversions while reducing operational costs by 28% through efficient database migration and system optimization.
              </p>

              <div className="overview-grid">
                <div className="overview-item">
                  <div className="overview-label">OBJECTIVE</div>
                  <div className="overview-text">Convert mobile app to responsive web application while maintaining user experience and improving conversion rates</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">TIMELINE</div>
                  <div className="overview-text">2 months from kickoff to MVP launch</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">APPROACH</div>
                  <div className="overview-text">Agile sprint planning, cross-functional collaboration, and comprehensive database migration</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">OUTCOME</div>
                  <div className="overview-text">Improved conversions, reduced costs, enhanced scalability with zero data loss</div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'challenge' && (
            <div className="section">
              <h2>Business Challenge</h2>
              <p className="intro-text">
                ATG's existing mobile application presented several critical challenges that limited growth and operational efficiency. The platform required a strategic transformation to meet evolving user expectations and business needs.
              </p>

              <div className="challenge-grid">
                <div className="challenge-card">
                  <div className="icon-box">📱</div>
                  <h3>Platform Limitations</h3>
                  <p>Mobile-only access restricted user reach and created friction for desktop users seeking multi-device flexibility</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">💰</div>
                  <h3>High Operational Costs</h3>
                  <p>Legacy infrastructure and inefficient database architecture drove up maintenance and hosting expenses</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">📊</div>
                  <h3>Conversion Barriers</h3>
                  <p>Mobile-only experience created unnecessary friction in the user journey, limiting conversion potential</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">⚙️</div>
                  <h3>Scalability Constraints</h3>
                  <p>Legacy database structure hampered system performance and ability to scale with growing user base</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'approach' && (
            <div className="section">
              <h2>Strategic Approach</h2>

              <div className="approach-section">
                <h3>Product Development & MVP Strategy</h3>
                <p>Led the strategic transformation from mobile app to responsive web application, prioritizing core features for rapid MVP delivery while ensuring seamless user migration.</p>
                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-title">Streamlined MVP Focus</div>
                    <div className="feature-text">Identified and prioritized essential features for rapid market entry</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Responsive Design</div>
                    <div className="feature-text">Created unified experience across desktop, tablet, and mobile devices</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">User Migration Strategy</div>
                    <div className="feature-text">Smooth transition path for existing mobile users to new web platform</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Conversion Optimization</div>
                    <div className="feature-text">Enhanced user flows and reduced friction points throughout journey</div>
                  </div>
                </div>
              </div>

              <h3 className="section-heading">Agile Project Management</h3>
              <p>Orchestrated cross-functional teams through structured Agile methodology to deliver on aggressive two-month timeline.</p>
              <div className="collab-list">
                <div className="collab-card collab-blue">
                  <h4>Sprint Planning & Execution</h4>
                  <p>Conducted regular sprint planning sessions with cross-functional development teams, establishing clear objectives and deliverables for each two-week cycle</p>
                </div>
                <div className="collab-card collab-purple">
                  <h4>Backlog Grooming</h4>
                  <p>Maintained prioritized product backlog, continuously refining user stories and requirements based on stakeholder feedback and technical constraints</p>
                </div>
                <div className="collab-card collab-orange">
                  <h4>Cross-Functional Coordination</h4>
                  <p>Managed collaboration between internal dev teams, external contractors, and third-party developers to ensure alignment and timely delivery</p>
                </div>
              </div>

              <h3 className="section-heading">End-to-End Database Migration</h3>
              <p>Led comprehensive migration from legacy database to modern architecture, ensuring data integrity while improving system performance.</p>
              <div className="operations-list">
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Data Integrity Assurance:</strong> Implemented rigorous validation processes ensuring zero data loss during migration
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Performance Optimization:</strong> Redesigned database schema to improve query performance and system scalability
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Cost Optimization:</strong> Reduced infrastructure costs by 28% through efficient database design and resource allocation
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Scalability Enhancement:</strong> Built foundation for future growth with improved system architecture
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'results' && (
            <div className="section">
              <h2>Results & Impact</h2>

              <div className="results-hero">
                <h3>Key Performance Metrics</h3>
                <div className="results-grid">
                  <div className="result-card">
                    <div className="result-value">10%</div>
                    <div className="result-label">Conversion rate improvement</div>
                  </div>
                  <div className="result-card">
                    <div className="result-value">28%</div>
                    <div className="result-label">Budget cost reduction</div>
                  </div>
                  <div className="result-card">
                    <div className="result-value">2 Mo</div>
                    <div className="result-label">MVP delivery timeline</div>
                  </div>
                </div>
              </div>

              <h3 className="section-heading">Business Impact</h3>
              <div className="impact-grid">
                <div className="impact-card impact-blue">
                  <div className="impact-icon">🎯</div>
                  <h4>Enhanced User Experience</h4>
                  <p>Responsive design enabled seamless access across all devices, removing platform barriers</p>
                </div>
                <div className="impact-card impact-purple">
                  <div className="impact-icon">📈</div>
                  <h4>Improved Conversions</h4>
                  <p>Streamlined user flows and reduced friction resulted in 10% conversion uplift</p>
                </div>
                <div className="impact-card impact-orange">
                  <div className="impact-icon">💰</div>
                  <h4>Cost Efficiency</h4>
                  <p>28% reduction in operational costs through optimized infrastructure</p>
                </div>
              </div>

              <h3 className="section-heading">Technical Excellence</h3>
              <div className="efficiency-list">
                <div className="efficiency-item">
                  <div className="efficiency-icon">⚡</div>
                  <div>
                    <h4>Zero Data Loss</h4>
                    <p>Successfully migrated entire user base with complete data integrity maintained</p>
                  </div>
                </div>
                <div className="efficiency-item">
                  <div className="efficiency-icon">📊</div>
                  <div>
                    <h4>Enhanced Scalability</h4>
                    <p>Modern database architecture positioned platform for sustainable growth</p>
                  </div>
                </div>
                <div className="efficiency-item">
                  <div className="efficiency-icon">✓</div>
                  <div>
                    <h4>On-Time Delivery</h4>
                    <p>Delivered fully functional MVP within aggressive two-month timeline</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'lessons' && (
            <div className="section">
              <h2>Key Success Factors & Lessons Learned</h2>

              <div className="lessons-grid">
                <div className="lesson-card">
                  <div className="lesson-number">1</div>
                  <h3>Strategic MVP Scoping</h3>
                  <p>Ruthless prioritization of core features enabled rapid delivery without sacrificing quality. Focus on essential functionality over feature bloat proved critical for timeline success.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">2</div>
                  <h3>Agile Discipline</h3>
                  <p>Structured sprint planning and backlog grooming maintained team focus and momentum. Regular cadence of delivery built confidence and enabled rapid course corrections.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">3</div>
                  <h3>Cross-Functional Collaboration</h3>
                  <p>Effective coordination between internal teams, contractors, and third-party developers required clear communication protocols and shared accountability frameworks.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">4</div>
                  <h3>Data Migration Rigor</h3>
                  <p>Comprehensive testing and validation processes were non-negotiable for database migration. Zero data loss required meticulous planning and execution discipline.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">5</div>
                  <h3>Cost-Performance Balance</h3>
                  <p>Database optimization delivered dual benefits—improved system performance while simultaneously reducing operational costs by 28%. Smart architecture pays dividends.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">6</div>
                  <h3>User-Centric Design</h3>
                  <p>Conversion improvements stemmed from deep understanding of user behavior and pain points. Responsive design removed barriers and streamlined critical user journeys.</p>
                </div>
              </div>

              <div className="conclusion">
                <h3>Conclusion</h3>
                <p>
                  The ATG mobile-to-web migration demonstrated that aggressive timelines and business impact are achievable through strategic product leadership, disciplined Agile execution, and technical excellence. By delivering a streamlined MVP within two months while simultaneously executing a complex database migration, the project improved user conversions by 10% and reduced operational costs by 28%—all while maintaining zero data loss. The initiative showcased the power of cross-functional collaboration, strategic prioritization, and rigorous execution in delivering transformative digital products.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}