import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import './App.css'
import  { Toaster } from 'react-hot-toast';


function App() {

  return (
   
   <BrowserRouter>
   <Toaster/>
    <Routes>
      <Route path='/'element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register /> } />
      <Route path='/admin' element={<Admin /> } />
      
    </Routes>
   
   </BrowserRouter>
   
   
  
  )
}

export default App
