import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import TopoMap from "./TopoMap";

const Hero = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 500],
    ["rgba(31, 93, 84, 0.1)", "rgba(252, 252, 252, 1)"]
  );

  return (
    <motion.section className="hero" style={{ backgroundColor: background }}>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Turning Ideas into Impact</h1>
        <p className="hero-subtitle">
          A product manager who bridges strategy, design, and execution. <br />
          I help teams define the right problems, build solutions that matter,
          and deliver measurable results.
        </p>

        <div className="hero-buttons">
          {/* Past Work button */}
          <motion.a
            href="#past-work"
            className="hero-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Past Work
          </motion.a>

          {/* Download Resume button */}
          <motion.a
            href={`${process.env.PUBLIC_URL}/Resume_Mathew_Steenwinkel.pdf`}
            download="Mathew_Steenwinkel_Resume.pdf"
            className="hero-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      <TopoMap />
    </motion.section>
  );
};

export default Hero;
