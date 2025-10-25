import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import BackLog from '../Components/BackLog'
import Skills from '../Components/Skills'
import CaseStudys from '../Components/CaseStudyCard'
import Contact from '../Components/Contact'
import Testimonials from '../Components/Testimonials'
import Metrics from '../Components/Metrics'
import Methodology from '../Components/Methodologies'
import Awareness from '../Components/Awareness'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <Metrics/>
      <BackLog />
      <Skills/>
      <Methodology />
      <CaseStudys />
      <Awareness />
      <Contact />
    </div>
  )
}

export default Home
