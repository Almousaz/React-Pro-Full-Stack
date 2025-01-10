import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import About from "./About";
import Profile from "./Profile";

function App() {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
  };

  return (
    <Router>
      {/* Show Navbar only if the user is authenticated */}
      {authToken && <Navbar handleLogout={handleLogout} />}
      
      <Routes>
        {/* Public Routes */}
        <Route 
          path="/" 
          element={authToken ? <Navigate to="/dashboard" /> : <Home />} 
        />
        <Route 
          path="/login" 
          element={authToken ? <Navigate to="/dashboard" /> : <Login setAuthToken={setAuthToken} />} 
        />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        {authToken && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}

        {/* Redirect to home if route is not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
