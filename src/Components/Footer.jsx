import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Mathew Steenwinkel. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/mathew-steenwinkel/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/mathewsteenwinkel" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:mathewsteenwinkel@gmail.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
