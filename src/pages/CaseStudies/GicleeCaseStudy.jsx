// CaseStudy.jsx
import React, { useState } from 'react';
import './GicleeCaseStudy.css';
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
      <div className="heroCase2">
        <div className="hero-background">
        <div className="container">
          <div className="hero-label">Case Study</div>
          <h1 className="hero-title">
            Launching a Limited-Edition<br />Giclée Line at Carter Ryan Gallery
          </h1>
          <p className="hero-subtitle">
            How strategic product development and operational excellence generated $100K in revenue within four months at a 90% profit margin
          </p>
          
          {/* Key Metrics */}
          <div className="metrics">
            <div className="metric-card">
              <div className="metric-value">$100K</div>
              <div className="metric-label">Revenue in 4 Months</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">90%</div>
              <div className="metric-label">Profit Margin</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">New</div>
              <div className="metric-label">Customer Segment</div>
            </div>
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
                This case study examines the successful launch of a limited-edition giclée product line at Carter Ryan Gallery, which generated $100,000 in revenue within four months of launch while maintaining an exceptional 90% profit margin. The initiative strategically targeted new customer segments through premium, accessible art offerings while optimizing operational efficiency.
              </p>

              <div className="overview-grid">
                <div className="overview-item">
                  <div className="overview-label">OBJECTIVE</div>
                  <div className="overview-text">Create a limited-edition product line to capture new clientele while maintaining brand positioning</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">TIMELINE</div>
                  <div className="overview-text">4 months from launch to $100K milestone</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">APPROACH</div>
                  <div className="overview-text">Cross-functional collaboration, demand forecasting, and operational optimization</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">OUTCOME</div>
                  <div className="overview-text">New revenue stream with 90% margins and expanded market reach</div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'challenge' && (
            <div className="section">
              <h2>Business Challenge</h2>
              <p className="intro-text">
                Carter Ryan Gallery faced the common gallery dilemma of balancing exclusivity with accessibility. While original artworks commanded premium prices, they limited the customer base to high-net-worth collectors.
              </p>

              <div className="challenge-grid">
                <div className="challenge-card">
                  <div className="icon-box">⚠️</div>
                  <h3>Limited Market Access</h3>
                  <p>Original artworks restricted customer base to high-net-worth collectors only</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">📉</div>
                  <h3>Revenue Concentration</h3>
                  <p>Heavy reliance on high-ticket original sales created revenue volatility</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">⚖️</div>
                  <h3>Brand Risk</h3>
                  <p>Needed to expand offerings without diluting premium brand positioning</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">📊</div>
                  <h3>Scalability Issues</h3>
                  <p>Required product offering that could scale profitably and efficiently</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'approach' && (
            <div className="section">
              <h2>Strategic Approach</h2>

              <div className="approach-section">
                <h3>Product Development & Positioning</h3>
                <p>The limited-edition giclée line was positioned as a bridge product—offering museum-quality reproductions with authentic scarcity through numbered editions.</p>
                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-title">Exclusivity through Limitation</div>
                    <div className="feature-text">Each piece numbered and edition-controlled</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Quality Assurance</div>
                    <div className="feature-text">Giclée printing for gallery-quality color accuracy</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Accessible Luxury</div>
                    <div className="feature-text">Price points for emerging collectors</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Artist Collaboration</div>
                    <div className="feature-text">Maintained artistic integrity through partnerships</div>
                  </div>
                </div>
              </div>

              <h3 className="section-heading">Cross-Functional Collaboration</h3>
              <div className="collab-list">
                <div className="collab-card collab-blue">
                  <h4>With Artists</h4>
                  <p>Negotiated favorable licensing terms while ensuring artists benefited from expanded market reach and maintained creative approval</p>
                </div>
                <div className="collab-card collab-purple">
                  <h4>With Operations</h4>
                  <p>Developed production workflows, quality control protocols, and inventory management systems for limited runs</p>
                </div>
                <div className="collab-card collab-orange">
                  <h4>With Sales Team</h4>
                  <p>Created positioning guidelines and sales training to articulate value without undermining original artwork pricing</p>
                </div>
                <div className="collab-card collab-teal">
                  <h4>Demand Forecasting</h4>
                  <p>Analyzed customer inquiry data, regional trends, and comparable gallery programs to size initial production runs</p>
                </div>
              </div>

              <h3 className="section-heading">Operational Excellence</h3>
              <p>Backend systems were redesigned to support the new product line:</p>
              <div className="operations-list">
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Inventory Tracking:</strong> Implemented edition number management to maintain provenance and authenticity
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Customer Flow Optimization:</strong> Streamlined the browsing-to-purchase journey, reducing friction
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Fulfillment Efficiency:</strong> Standardized packaging and shipping protocols for consistent quality
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Certificate of Authenticity:</strong> Created documentation systems that enhanced perceived value
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'results' && (
            <div className="section">
              <h2>Results & Impact</h2>

              <div className="results-hero">
                <h3>Financial Performance</h3>
                <div className="results-grid">
                  <div className="result-card">
                    <div className="result-value">$100K</div>
                    <div className="result-label">Revenue in first four months</div>
                  </div>
                  <div className="result-card">
                    <div className="result-value">90%</div>
                    <div className="result-label">Profit margin achieved</div>
                  </div>
                  <div className="result-card">
                    <div className="result-value">↑</div>
                    <div className="result-label">Average transaction value increased</div>
                  </div>
                </div>
              </div>

              <h3 className="section-heading">Market Expansion</h3>
              <div className="impact-grid">
                <div className="impact-card impact-blue">
                  <div className="impact-icon">🎯</div>
                  <h4>New Audiences</h4>
                  <p>Successfully attracted design professionals, corporate buyers, and emerging collectors</p>
                </div>
                <div className="impact-card impact-purple">
                  <div className="impact-icon">📈</div>
                  <h4>Customer Journey</h4>
                  <p>Created entry point for customers who later graduated to original artwork purchases</p>
                </div>
                <div className="impact-card impact-orange">
                  <div className="impact-icon">🌍</div>
                  <h4>Geographic Reach</h4>
                  <p>Expanded reach through lower price points enabling broader marketing</p>
                </div>
              </div>

              <h3 className="section-heading">Operational Efficiency</h3>
              <div className="efficiency-list">
                <div className="efficiency-item">
                  <div className="efficiency-icon">⚡</div>
                  <div>
                    <h4>Streamlined Systems</h4>
                    <p>Reduced fulfillment time through optimized workflows</p>
                  </div>
                </div>
                <div className="efficiency-item">
                  <div className="efficiency-icon">💾</div>
                  <div>
                    <h4>Scalable Model</h4>
                    <p>Rapid expansion to additional artists and editions</p>
                  </div>
                </div>
                <div className="efficiency-item">
                  <div className="efficiency-icon">✓</div>
                  <div>
                    <h4>Quality Control</h4>
                    <p>Protocols resulted in minimal returns or quality complaints</p>
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
                  <h3>Strategic Positioning</h3>
                  <p>Limited editions maintained scarcity value while improving accessibility. The key was finding the balance between exclusivity and market reach.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">2</div>
                  <h3>Margin Discipline</h3>
                  <p>High profit margins resulted from efficient production planning and premium pricing strategy that reflected authentic value.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">3</div>
                  <h3>Customer Insight</h3>
                  <p>Deep understanding of customer trends and demand patterns informed smart inventory decisions and production runs.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">4</div>
                  <h3>Operational Rigor</h3>
                  <p>Backend systems prevented common pitfalls like overselling or edition mismanagement, protecting brand trust.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">5</div>
                  <h3>Cross-Functional Alignment</h3>
                  <p>Collaboration ensured product success didn't come at the expense of gallery relationships or brand integrity.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">6</div>
                  <h3>Demand Forecasting</h3>
                  <p>Reduced risk while maintaining scarcity value through data-driven production planning and inventory management.</p>
                </div>
              </div>

              <div className="conclusion">
                <h3>Conclusion</h3>
                <p>
                  The limited-edition giclée line demonstrated that galleries can successfully serve new market segments while maintaining premium positioning and exceptional profitability. The initiative's success stemmed from strategic product design, collaborative planning, and operational excellence—creating a scalable revenue stream that complemented the gallery's core business.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}