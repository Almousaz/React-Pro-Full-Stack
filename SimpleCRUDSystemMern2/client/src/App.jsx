
import React from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Container } from 'react-bootstrap';
import LoginPage from './pages/LoginPage';
import Signup from './pages/SignUp';
import ProfilePage from './pages/ProfilePage';
import Post from './pages/Post';
import NavbarPro from './components/Navbar';



function App() {


  return (
    <>
    <Router>
      <NavbarPro />
      <Container>
        
        
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userprofile" element={<ProfilePage />} />
        <Route path="/postdetailpage" element={<Post />} />
      </Routes>
      
      </Container>
    </Router>

    </>
  )
}

export default App
