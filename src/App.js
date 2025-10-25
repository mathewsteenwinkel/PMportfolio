import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";

// Case Studies
import OnBoardingCaseStudies from "./Pages/CaseStudies/OnBoardingCaseStudy";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Components


function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
        <Route path="/case-studies/onboarding" element={<OnBoardingCaseStudies />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
