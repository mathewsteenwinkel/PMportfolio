import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import BackLog from '../Components/BackLog'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <BackLog />
    </div>
  )
}

export default Home
