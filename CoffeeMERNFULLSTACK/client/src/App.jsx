import { Route, Routes } from 'react-router-dom'
import Product from './pages/product/Product'
import { Contact } from './pages/contact/Contact'
import { About } from './pages/about/About'
import { Login } from './pages/login/Login'
import { Admin } from './pages/admin/Admin'
import { Dashboard } from './pages/dashboard/Dashboard'
import { AdminContact } from './pages/adminContact/AdminContact'
import { AdminAbout } from './pages/adminAbout/AdminAbout'


function App() {

  return (
    <>
       <>
        
        
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/admincontact" element={<AdminContact/>} />
        <Route path="/adminabout" element={<AdminAbout/>} />
      </Routes>
    </>
    </>
  )
}

export default App