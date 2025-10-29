import React from "react";
import { Link } from "react-router-dom";
import "./CaseStudy.css";
import Barn from "../Images/Barn.webp";
import Carmella from "../Images/Carmella.webp";
import Run from "../Images/Run.webp";

const caseStudies = [
  {
    id: 1,
    title: "Web App Development for MVP",
    description:
      "Led the product development of a streamlined MVP to convert an existing mobile app into a responsive web app, moving existing users over and boosting conversions by 10%. Oversaw Agile sprint planning, backlog grooming, and delivery with cross-functional dev teams, contractors, and third-party developers to develop an MVP within two months. Led end-to-end database migration from legacy app to web application, improving system scalability and performance, ensuring no data loss, and reducing budget costs by 28%.",
    image: Run,
    link: "/case-studies/onboarding",
  },
  {
    id: 2,
    title: "Product Creation for Carter Ryan Gallery",
    description:
      "Created a limited-edition product line to capture new clientele, resulting in $100K revenue in 4 months. Collaborated cross-functionally to forecast demand and align product availability with customer trends. Streamlined backend systems and customer flow, achieving a 90% profit margin across the new product line.",
    image: Barn,
    link: "/case-studies/giclee",
  },
  {
    id: 3,
    title: "Improving Web Development Processes for Carmella",
    description:
      "Introduced structured wireframe review processes using AI tools and low-fidelity prototypes, reducing revision cycles and cutting delivery timelines by 50%, boosting company sales by 18%. Led the design and development of multiple clients' websites while implementing sales funnels to increase sales by 34%. Standardized development cycles to a two-week turnaround, achieving a 100% on-time delivery rate.",
    image: Carmella,
    link: "/case-studies/Carmella",
  },
];

const truncateText = (text, maxLength = 200) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

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
              <p>{truncateText(study.description)}</p>
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
