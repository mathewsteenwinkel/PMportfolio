import React from 'react'
import './Home.css'
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
      <section id="/">
      <Hero />
      </section>
      <About />
      <Metrics />
      <section id="past-work">
      <BackLog />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <Methodology />
      <CaseStudys />
      <Awareness />
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Home
