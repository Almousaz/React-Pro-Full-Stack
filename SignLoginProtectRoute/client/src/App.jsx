import React from 'react'
import './index.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'
import Welcome from './pages/Welcome'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/welcome' element={<Welcome/>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
