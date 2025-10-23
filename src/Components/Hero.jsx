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
        <h1 className="hero-title">Explore New Heights</h1>
        <p className="hero-subtitle">
          Harness tools, insights, and design to elevate your product experience.
        </p>
        <motion.button
          className="hero-button"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <TopoMap />
    </motion.section>
  );
};

export default Hero;
