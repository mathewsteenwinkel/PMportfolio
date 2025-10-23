import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog />
      <Contact />
    </div>
  )
}

export default Home
