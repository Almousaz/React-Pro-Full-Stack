import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <Qualities />
      <Menu />
      <WhoAreWe />
      <Team />
      <Reservation />
    </div>
  )
}

export default Home
