import React from "react"
import Home from "./pages/home" 

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ThankYou from "./pages/thankYou";
import ContactError from "./pages/error";


  


function App() {

  return (
    <div className="container">
      <h1>React App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/thank-you" element={<ThankYou/>} />
          <Route path="/contact-error" element={<ContactError/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
