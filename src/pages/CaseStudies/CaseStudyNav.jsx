import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./CaseStudyNav.css";

export default function CaseStudyNav() {
  const [offset, setOffset] = useState(65);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 90) setOffset(50); // compact mode
      else setOffset(64); // full mode
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const caseStudies = [
    { name: "Web Migration", path: "/case-studies/WebMigration" },
    { name: "Carter Ryan Gallery", path: "/case-studies/giclee" },
    { name: "Carmella Marketing", path: "/case-studies/carmella" },
  ];

  return (
    <header className="case-study-nav" style={{ top: `${offset}px` }}>
      <div className="container">
        <nav className="case-study-nav-container">
          {caseStudies.map((study) => (
            <NavLink
              key={study.path}
              to={study.path}
              className={({ isActive }) =>
                isActive ? "case-nav-link active" : "case-nav-link"
              }
            >
              {study.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
