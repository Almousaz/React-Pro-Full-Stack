
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main/Main.jsx";
import Signup from "./components/signup/Signup.jsx";
import Login from "./components/login/Login.jsx";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{/* Conditional Route for Main Page */}
			{user ? (
				<Route path="/" element={<Main />} />
			) : (
				<Route path="/" element={<Navigate replace to="/Login" />} />
			)}
			{/* Public Routes */}
			<Route path="/signup" element={<Signup />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
