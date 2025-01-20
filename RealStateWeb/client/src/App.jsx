import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Villas from './components/Villas/Villas'
import SingleVilla from './components/Villas/SingleVilla'



function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/villas' element={<Villas />} />
          <Route path='/villa/:id' element={<SingleVilla />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
