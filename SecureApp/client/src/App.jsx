import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'
import './App.css'
import  { Toaster } from 'react-hot-toast';
import AdminLaouts from './Layouts/AdminLaouts'
import UserLayout from './Layouts/UserLayout'
import PublicLayouts from './Layouts/PublicLayouts'


function App() {

  return (
   
   <BrowserRouter>
   <Toaster/>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home />} />
      </Route>
      <Route path='admin' element={<AdminLaouts />}>
          <Route index element={<Admin /> } />
      </Route>
      <Route path='/' element={<PublicLayouts/>}>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register /> } />
      </Route>
      
    </Routes>
   
   </BrowserRouter>
   
   
  
  )
}

export default App
