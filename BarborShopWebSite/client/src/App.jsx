import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './sections/Hero'
import WhyChoose from './sections/WhyChoose'
import Pricing from './sections/Pricing'
import Services from './sections/Services'
import Gallery from './sections/Gallery'
import Testimonial from './sections/Testimonial'
import Contact from './sections/Contact'
import Footer from './components/Footer'



function App() {

  return (
    <>
       <Header />
       <Hero />
       <WhyChoose />
       <Pricing />
       <Services />
       <Gallery />
       <Testimonial />
       <Contact />
       <Footer />
    </>
  )
}

export default App
