import React from 'react'
import HeroSection from '../../subComponents/HeroSection'
import TopVillas from '../../subComponents/TopVillas'
import Regions from '../../subComponents/Regions'
import OurSpecialities from '../../subComponents/OurSpecialities'

const Home = () => {
  return (
    <>
    <article className='page'>
        <HeroSection />
        <TopVillas />
        <Regions />
        <OurSpecialities />
    </article>
    </>
  )
}

export default Home
