import React, { useState } from 'react';
import './Carmella.css';
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
      <div className="heroCase3">
        <div className="container">
          <div className="hero-label">Case Study</div>
          <h1 className="hero-title">
            Transforming Client Delivery<br />at Carmella Marketing
          </h1>
          <p className="hero-subtitle">
            How process innovation and AI-powered design workflows cut delivery timelines by 50%, achieved 100% on-time delivery, and drove 34% sales growth for clients
          </p>
          
          {/* Key Metrics */}
          <div className="metrics">
            <div className="metric-card">
              <div className="metric-value">50%</div>
              <div className="metric-label">Faster Delivery</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">100%</div>
              <div className="metric-label">On-Time Rate</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">34%</div>
              <div className="metric-label">Client Sales Boost</div>
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
                This case study examines the operational transformation at Carmella Marketing that revolutionized client delivery processes. By introducing structured wireframe reviews with AI tools, implementing standardized workflows, and optimizing sales funnels, the initiative reduced delivery timelines by 50%, achieved 100% on-time delivery, and drove significant revenue growth both for the agency (18% sales increase) and clients (34% average sales boost).
              </p>

              <div className="overview-grid">
                <div className="overview-item">
                  <div className="overview-label">OBJECTIVE</div>
                  <div className="overview-text">Streamline website design and development processes while improving client outcomes and agency profitability</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">TIMELINE</div>
                  <div className="overview-text">Reduced from several weeks to standardized 2-week turnaround</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">APPROACH</div>
                  <div className="overview-text">AI-powered wireframing, structured review processes, and product management methodologies</div>
                </div>
                <div className="overview-item">
                  <div className="overview-label">OUTCOME</div>
                  <div className="overview-text">50% faster delivery, 100% on-time rate, 18% agency growth, 34% client sales increase</div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'challenge' && (
            <div className="section">
              <h2>Business Challenge</h2>
              <p className="intro-text">
                Carmella Marketing faced operational inefficiencies that created bottlenecks in client delivery, unpredictable timelines, and suboptimal client results. The agency needed a systematic approach to improve both internal operations and client outcomes.
              </p>

              <div className="challenge-grid">
                <div className="challenge-card">
                  <div className="icon-box">🔄</div>
                  <h3>Endless Revision Cycles</h3>
                  <p>Unstructured design review processes led to multiple revision rounds, delaying projects and frustrating clients</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">⏰</div>
                  <h3>Inconsistent Timelines</h3>
                  <p>Project delivery varied wildly from several weeks to months with no standardized process or predictable completion dates</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">📉</div>
                  <h3>Suboptimal Client Results</h3>
                  <p>Websites lacked strategic sales funnels and conversion optimization, limiting ROI for clients</p>
                </div>

                <div className="challenge-card">
                  <div className="icon-box">💼</div>
                  <h3>Capacity Constraints</h3>
                  <p>Inefficient workflows limited the number of clients the agency could serve, capping growth potential</p>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'approach' && (
            <div className="section">
              <h2>Strategic Approach</h2>

              <div className="approach-section">
                <h3>AI-Powered Wireframe Innovation</h3>
                <p>Introduced structured wireframe review processes leveraging AI tools and low-fidelity prototypes to accelerate alignment and reduce costly late-stage revisions.</p>
                <div className="feature-grid">
                  <div className="feature-card">
                    <div className="feature-title">AI-Assisted Design</div>
                    <div className="feature-text">Utilized AI tools to rapidly generate wireframe concepts and variations</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Low-Fi First Approach</div>
                    <div className="feature-text">Validated concepts with simple prototypes before investing in high-fidelity design</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Structured Reviews</div>
                    <div className="feature-text">Implemented formal review checkpoints with clear approval criteria</div>
                  </div>
                  <div className="feature-card">
                    <div className="feature-title">Client Collaboration</div>
                    <div className="feature-text">Early stakeholder involvement ensured alignment before development</div>
                  </div>
                </div>
              </div>

              <h3 className="section-heading">Product Management Methodology</h3>
              <p>Applied rigorous product management techniques to standardize workflows and establish predictable delivery cadences.</p>
              <div className="collab-list">
                <div className="collab-card collab-blue">
                  <h4>Standardized Processes</h4>
                  <p>Developed repeatable workflows for discovery, design, development, and deployment phases with clear deliverables and timelines</p>
                </div>
                <div className="collab-card collab-purple">
                  <h4>Two-Week Sprints</h4>
                  <p>Established fixed two-week delivery cycles, creating predictability for clients and internal resource planning</p>
                </div>
                <div className="collab-card collab-orange">
                  <h4>Quality Gates</h4>
                  <p>Implemented phase-gate reviews to catch issues early and maintain quality standards throughout projects</p>
                </div>
                <div className="collab-card collab-teal">
                  <h4>Resource Optimization</h4>
                  <p>Streamlined team assignments and workflows to maximize capacity without sacrificing quality</p>
                </div>
              </div>

              <h3 className="section-heading">Sales Funnel & Conversion Optimization</h3>
              <p>Led design and development of strategic websites with embedded sales funnels optimized for conversion and revenue generation.</p>
              <div className="operations-list">
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Strategic Architecture:</strong> Designed user journeys that guided visitors through awareness, consideration, and conversion stages
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Conversion-Focused Design:</strong> Optimized layouts, CTAs, and content to drive measurable business outcomes
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Performance Tracking:</strong> Built analytics frameworks to measure and optimize conversion rates post-launch
                  </div>
                </div>
                <div className="operations-item">
                  <div className="check-icon">✓</div>
                  <div>
                    <strong>Multi-Client Portfolio:</strong> Applied learnings across multiple client websites to drive consistent results
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'results' && (
            <div className="section">
              <h2>Results & Impact</h2>

              <div className="results-hero">
                <h3>Operational Excellence Metrics</h3>
                <div className="results-grid">
                  <div className="result-card">
                    <div className="result-value">50%</div>
                    <div className="result-label">Reduction in delivery timeline</div>
                  </div>
                  <div className="result-card">
                    <div className="result-value">100%</div>
                    <div className="result-label">On-time delivery rate achieved</div>
                  </div>
                  <div className="result-card">
                    <div className="result-value">2 Weeks</div>
                    <div className="result-label">Standardized turnaround time</div>
                  </div>
                </div>
              </div>

              <h3 className="section-heading">Business Growth Impact</h3>
              <div className="impact-grid">
                <div className="impact-card impact-blue">
                  <div className="impact-icon">📈</div>
                  <h4>Agency Revenue Growth</h4>
                  <p>18% increase in company sales through improved capacity, client satisfaction, and referrals</p>
                </div>
                <div className="impact-card impact-purple">
                  <div className="impact-icon">💰</div>
                  <h4>Client Sales Performance</h4>
                  <p>34% average sales boost for clients through strategic funnel implementation and conversion optimization</p>
                </div>
                <div className="impact-card impact-orange">
                  <div className="impact-icon">⚡</div>
                  <h4>Increased Capacity</h4>
                  <p>Faster delivery cycles enabled agency to serve more clients without additional headcount</p>
                </div>
              </div>

              <h3 className="section-heading">Process Improvements</h3>
              <div className="efficiency-list">
                <div className="efficiency-item">
                  <div className="efficiency-icon">🎯</div>
                  <div>
                    <h4>Reduced Revision Cycles</h4>
                    <p>AI-powered wireframes and structured reviews eliminated late-stage design changes and rework</p>
                  </div>
                </div>
                <div className="efficiency-item">
                  <div className="efficiency-icon">📊</div>
                  <div>
                    <h4>Predictable Delivery</h4>
                    <p>Standardized two-week sprints created reliability and trust with clients</p>
                  </div>
                </div>
                <div className="efficiency-item">
                  <div className="efficiency-icon">✓</div>
                  <div>
                    <h4>Quality Consistency</h4>
                    <p>Structured processes maintained high standards across all client projects</p>
                  </div>
                </div>
              </div>

              <h3 className="section-heading">Client Success Stories</h3>
              <div className="impact-grid">
                <div className="impact-card impact-blue">
                  <div className="impact-icon">🏆</div>
                  <h4>Higher Conversion Rates</h4>
                  <p>Strategic sales funnels consistently outperformed industry benchmarks for client websites</p>
                </div>
                <div className="impact-card impact-purple">
                  <div className="impact-icon">🚀</div>
                  <h4>Faster Time-to-Market</h4>
                  <p>Clients launched optimized websites in weeks instead of months, capturing revenue sooner</p>
                </div>
                <div className="impact-card impact-orange">
                  <div className="impact-icon">💡</div>
                  <h4>Improved Satisfaction</h4>
                  <p>Predictable timelines and better results led to higher client retention and referrals</p>
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
                  <h3>AI as Force Multiplier</h3>
                  <p>AI tools didn't replace human creativity—they accelerated concept generation and iteration, allowing designers to explore more options faster and focus on strategic decisions rather than manual tasks.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">2</div>
                  <h3>Low-Fidelity Validation</h3>
                  <p>Getting client buy-in on wireframes before high-fidelity design prevented expensive late-stage revisions. Early alignment saved weeks of rework and protected profit margins.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">3</div>
                  <h3>Process Over Heroics</h3>
                  <p>Sustainable results came from repeatable processes, not individual heroics. Standardized workflows created predictability and allowed the team to scale effectively.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">4</div>
                  <h3>Fixed Timeboxes Work</h3>
                  <p>Two-week sprints forced prioritization and prevented scope creep. Constraints drove clarity on what truly mattered for each project phase.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">5</div>
                  <h3>Strategic Beats Pretty</h3>
                  <p>Websites designed for conversion consistently outperformed aesthetically focused sites. Sales funnels and user journey optimization drove measurable ROI for clients.</p>
                </div>

                <div className="lesson-card">
                  <div className="lesson-number">6</div>
                  <h3>Client Success = Agency Success</h3>
                  <p>34% sales growth for clients translated directly to agency growth through retention, referrals, and expanded engagements. Focusing on client outcomes created a virtuous cycle.</p>
                </div>
              </div>

              <div className="conclusion">
                <h3>Conclusion</h3>
                <p>
                  The transformation at Carmella Marketing demonstrated that operational excellence and client outcomes are intrinsically linked. By introducing AI-powered wireframe processes, applying product management disciplines, and focusing relentlessly on conversion optimization, the agency cut delivery timelines in half while achieving 100% on-time delivery. More importantly, the 34% average sales increase for clients proved that strategic, systematized approaches deliver superior results compared to ad-hoc creative processes. The initiative showcased how process innovation, technology adoption, and client-centric design can simultaneously drive agency growth (18% sales increase) and exceptional client outcomes—creating sustainable competitive advantage in a crowded market.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}