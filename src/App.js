import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

// Case Studies
import OnBoardingCaseStudies from "./Pages/CaseStudies/OnBoardingCaseStudy";
import GicleeCaseStudies from "./Pages/CaseStudies/GicleeCaseStudy";
import Carmella from "./Pages/CaseStudies/Carmella";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Components


function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/case-studies/WebMigration" element={<OnBoardingCaseStudies />} />
        <Route path="/case-studies/giclee" element={<GicleeCaseStudies />} />
        <Route path="/case-studies/Carmella" element={<Carmella />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
