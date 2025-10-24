import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";

const caseStudies = [
  {
    id: 1,
    title: "Improving Onboarding for SaaS Users",
    description:
      "Redesigned the onboarding flow for a SaaS platform to reduce churn and increase activation rates by 25%.",
    image: "/Images/onboarding.jpg",
    link: "/case-studies/onboarding",
  },
  {
    id: 2,
    title: "Mobile App Feature Prioritization",
    description:
      "Led a cross-functional team to prioritize mobile app features using data-driven frameworks and user feedback.",
    image: "/Images/mobileapp.jpg",
    link: "/case-studies/feature-prioritization",
  },
  {
    id: 3,
    title: "Optimizing E-Commerce Checkout",
    description:
      "Developed hypotheses and experiments that reduced cart abandonment and improved conversion rate by 18%.",
    image: "/Images/ecommerce.jpg",
    link: "/case-studies/checkout-optimization",
  },
];

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <h2>Case Studies</h2>
      <div className="case-cards">
        {caseStudies.map((study) => (
          <div key={study.id} className="case-card">
            <img src={study.image} alt={study.title} className="case-image" />
            <div className="case-content">
              <h3>{study.title}</h3>
              <p>{study.description}</p>
              <Link to={study.link} className="case-button">
                View Case Study →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
