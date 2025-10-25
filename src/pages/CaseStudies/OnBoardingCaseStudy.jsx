import React from "react";
import "./OnBoardingCaseStudies.css";

const OnboardingCaseStudy = () => {
  return (
    <section className="case-study-page">
      <div className="case-study-hero">
        <div className="hero-overlay">
          <h1>Improving SaaS User Onboarding</h1>
          <p>Reducing churn and accelerating activation through data-driven design.</p>
        </div>
      </div>

      <div className="case-study-content">
        <section className="case-section">
          <h2>Overview</h2>
          <p>
            This project focused on improving the onboarding experience for new users
            of a B2B SaaS analytics platform. Activation rates had plateaued, and user
            feedback showed confusion during setup. My goal was to identify friction
            points and design a guided onboarding flow that would improve engagement
            within the first seven days.
          </p>
        </section>

        <section className="case-section">
          <h2>Problem</h2>
          <p>
            Only 42% of new signups were completing their first key action — connecting
            a data source — within their first session. The existing onboarding relied
            on passive tooltips and lacked clear progression, resulting in confusion and
            early drop-offs.
          </p>
        </section>

        <section className="case-section">
          <h2>Solution</h2>
          <p>
            Working with design and engineering, we implemented a step-by-step
            onboarding checklist, inline progress indicators, and contextual support
            prompts. We ran usability tests to refine copy and sequence, ensuring
            guidance without overwhelming users.
          </p>
          <ul>
            <li>Introduced a progress tracker with visual milestones</li>
            <li>Added contextual help modals linked to FAQs</li>
            <li>Optimized sign-up flow to reduce friction from 6 to 3 screens</li>
          </ul>
        </section>

        <section className="case-section">
          <h2>Impact</h2>
          <p>
            After launch, the completion rate for first key actions rose to 67% (+25%).
            Support tickets related to setup dropped by 18%, and NPS improved by 12
            points among new users.
          </p>
        </section>

        <section className="case-section">
          <h2>Reflection</h2>
          <p>
            This project reinforced the value of iterative testing and aligning UX
            improvements with measurable outcomes. It also highlighted how even small
            copy and flow adjustments can significantly affect user confidence.
          </p>
        </section>
      </div>
    </section>
  );
};

export default OnboardingCaseStudy;
