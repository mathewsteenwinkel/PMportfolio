import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scroll to sections on home page
  const handleScrollToSection = (id) => {
    if (location.pathname !== "/") {
      // Navigate to home first, then scroll
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    closeMenu();
  };

  // If coming from another page with hash, scroll after navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <NavLink
          to="/"
          className="nav-logo"
          onClick={() => {
            closeMenu();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Mathew Steenwinkel
        </NavLink>

        {/* Hamburger Icon */}
        <div
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Links */}
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <button onClick={() => handleScrollToSection("past-work")}>
            Past Work
          </button>
          <button onClick={() => handleScrollToSection("skills")}>
            Skills
          </button>
          <button onClick={() => handleScrollToSection("contact")}>
            Contact
          </button>

          {/* Dropdown */}
          <div
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="dropbtn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Case Studies
              <ChevronDown
                className={`dropdown-arrow ${dropdownOpen ? "rotated" : ""}`}
                size={16}
              />
            </button>
            <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
              <NavLink to="/case-studies/WebMigration" onClick={closeMenu}>
                Web Migration
              </NavLink>
              <NavLink to="/case-studies/giclee" onClick={closeMenu}>
                Carter Ryan Gallery
              </NavLink>
              <NavLink to="/case-studies/Carmella" onClick={closeMenu}>
                Carmella Marketing
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
