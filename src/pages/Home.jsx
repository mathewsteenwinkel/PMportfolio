import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import BackLog from '../Components/BackLog'
import Skills from '../Components/Skills'
import CaseStudys from '../Components/CaseStudyCard'
import Contact from '../Components/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <BackLog />
      <Skills/>
      <CaseStudys />
      <Contact />
    </div>
  )
}

export default Home
