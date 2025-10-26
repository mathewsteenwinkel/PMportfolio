import React from 'react';
import { Code, Lightbulb, Palette } from 'lucide-react';
import './Skills.css';

const SkillsModernCards = () => {
  const productSkills = [
    { name: "Business Process Mapping", level: 95 },
    { name: "Requirements Gathering", level: 90 },
    { name: "Agile/Scrum Methodology", level: 95 },
    { name: "Backlog Grooming", level: 90 },
    { name: "User Story Writing", level: 95 },
    { name: "Stakeholder Communication", level: 90 },
    { name: "Project Scope Definition", level: 85 },
    { name: "E-commerce Systems", level: 80 }
  ];

  const technicalSkills = [
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 95 },
    { name: "HTML/CSS", level: 95 },
    { name: "Sass", level: 85 },
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "SQL", level: 80 },
    { name: "Git/GitHub", level: 90 },
    { name: "Vue", level: 75 },
    { name: "Rails", level: 70 }
  ];

  const designSkills = [
    { name: "UX Design", level: 85 },
    { name: "UI Design", level: 85 },
    { name: "Wireframing", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "Cypress", level: 80 },
    { name: "Jest", level: 75 },
    { name: "Mocha/Chai", level: 75 },
    { name: "Storybook", level: 80 }
  ];

  return (
    <div className="skills-container">
      <div className="skills-content">
        {/* Header */}
        <div className="skills-header">
          <h1 className="main-title">Skills & Expertise</h1>
          <p className="subtitle">Full-stack product management and development capabilities</p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Product Management Card */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="icon-wrapper product-icon">
                <Lightbulb className="header-icon" />
              </div>
              <h2 className="category-title">Product Management</h2>
            </div>
            <div className="skills-list">
              {productSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill product-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Card */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="icon-wrapper technical-icon">
                <Code className="header-icon" />
              </div>
              <h2 className="category-title">Technical Skills</h2>
            </div>
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill technical-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Design & Testing Card */}
          <div className="skill-category-card">
            <div className="category-header">
              <div className="icon-wrapper design-icon">
                <Palette className="header-icon" />
              </div>
              <h2 className="category-title">Design & Testing</h2>
            </div>
            <div className="skills-list">
              {designSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill design-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="summary-stats">
          <div className="stat-item">
            <div className="stat-number">19</div>
            <div className="stat-label">Technical Skills</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">8</div>
            <div className="stat-label">Product Skills</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">90%+</div>
            <div className="stat-label">Avg Proficiency</div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default SkillsModernCards;