// FadeSlideIn.jsx
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FadeSlideIn = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeSlideIn;
