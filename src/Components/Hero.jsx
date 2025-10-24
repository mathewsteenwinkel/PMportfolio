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
    <motion.section
      className="hero"
      style={{ backgroundColor: background }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-title">Turning Ideas into Impact</h1>
        <p className="hero-subtitle">A product manager who bridges strategy, design, and execution. I help teams define the right problems, build solutions that matter, and deliver measurable results.
        </p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Portfolio
        </motion.button>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Download Resume
        </motion.button>
      </motion.div>
      <TopoMap />
    </motion.section>
  );
};

export default Hero;
