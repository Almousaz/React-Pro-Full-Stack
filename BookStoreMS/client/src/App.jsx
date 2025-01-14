import React, { useState , useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddStudent from "./components/AddStudent";
import Logout from "./components/Logout";
import axios from "axios";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

function App() {

  const [role , setRole] = useState('')

  
  axios.defaults.withCredentials = true
  useEffect(() => {
    axios.get('http://localhost:4755/auth/verify')
    .then(res => {
      if(res.data.login){
        setRole(res.data.role)
      }else {
        setRole('')
      }
      console.log(res)


    }).catch(err => console.log(err))
  } , [])


  return (
    <BrowserRouter>
      <Navbar role = {role}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login setRoleVar = { setRole }/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/logout" element={<Logout setRole = {setRole} />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:id" element={<EditBook />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
