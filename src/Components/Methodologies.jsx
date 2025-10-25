import React from 'react';
import { Award, GitBranch, Repeat, Shield } from 'lucide-react';
import './Methodologies.css';

export default function Methodology() {
  return (
    <section className="methodology-wrapper">
      <div className="methodology-container">
        <div className="methodology-header">
          <h2 className="methodology-title">Product Approach & Methodology</h2>
          <p className="methodology-subtitle">
            How I build products that deliver value and drive business outcomes
          </p>
        </div>

        <div className="methodology-content">
          <div className="methodology-main">
            <div className="philosophy-card">
              <h3 className="philosophy-title">My Product Philosophy</h3>
              <p className="philosophy-text">
                I believe great products are built at the intersection of user needs, business value, and technical feasibility. 
                My approach combines rigorous data analysis with empathetic user research to inform strategic decisions. 
                I prioritize ruthlessly, communicate transparently, and empower cross-functional teams to do their best work.
              </p>
              <div className="philosophy-principles">
                <div className="principle">
                  <span className="principle-number">01</span>
                  <span className="principle-text">User-centric decision making</span>
                </div>
                <div className="principle">
                  <span className="principle-number">02</span>
                  <span className="principle-text">Data-informed, not data-driven</span>
                </div>
                <div className="principle">
                  <span className="principle-number">03</span>
                  <span className="principle-text">Iterate fast, learn faster</span>
                </div>
                <div className="principle">
                  <span className="principle-number">04</span>
                  <span className="principle-text">Empower teams, own outcomes</span>
                </div>
              </div>
            </div>
          </div>

          <div className="methodology-frameworks">
            <div className="framework-card">
              <div className="framework-icon-wrapper agile">
                <Repeat className="framework-icon" />
              </div>
              <h4 className="framework-title">Agile Methodology</h4>
              <p className="framework-description">
                Expert in Scrum and Kanban frameworks. Certified Professional Scrum Product Owner (PSPO I). 
                Skilled at running sprints, managing backlogs, and facilitating ceremonies that keep teams aligned and productive.
              </p>
            </div>

            <div className="framework-card">
              <div className="framework-icon-wrapper waterfall">
                <GitBranch className="framework-icon" />
              </div>
              <h4 className="framework-title">Waterfall & Hybrid</h4>
              <p className="framework-description">
                Deep understanding of waterfall methodology for complex, regulated environments. 
                Skilled at adapting approach based on project constraints, team maturity, and organizational needs.
              </p>
            </div>

            <div className="framework-card certification-highlight">
              <div className="framework-icon-wrapper certification">
                <Award className="framework-icon" />
              </div>
              <h4 className="framework-title">Certified Professional</h4>
              <div className="certification-badge">
                <Shield className="badge-icon" />
                <div className="badge-text">
                  <p className="badge-title">PSPO I Certified</p>
                  <p className="badge-subtitle">Professional Scrum Product Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}