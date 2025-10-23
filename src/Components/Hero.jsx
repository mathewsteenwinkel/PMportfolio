import React from "react";

const Hero = () => (
  <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[url('/assets/images/hero-bg.jpg')] bg-cover bg-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Building products where data, design, and purpose meet.
    </h1>
    <p className="max-w-xl text-lg mb-8">
      I’m a web developer and product strategist with a background in business,
      sustainability, and outdoor adventure.
    </p>
    <div className="flex gap-4">
      <a href="#projects" className="bg-green-600 text-white px-6 py-3 rounded-lg">
        View My Work
      </a>
      <a href="#contact" className="border border-green-600 px-6 py-3 rounded-lg">
        Contact Me
      </a>
    </div>
  </section>
);

export default Hero;
