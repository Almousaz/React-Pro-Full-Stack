import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import About from './pages/About';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import './style.css'; // Import global styles

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for authentication status on initial load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {/* Conditionally render Navbar only if user is authenticated */}
      {isAuthenticated && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={<Dashboard />} />} />
        <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={<Profile />} />} />
        <Route path="/about" element={<ProtectedRoute isAuthenticated={isAuthenticated} component={<About />} />} />
      </Routes>
    </Router>
  );
};

export default App;
