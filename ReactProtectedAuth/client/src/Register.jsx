import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register({ setAuthToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      // Register the user
      const registerResponse = await axios.post("http://localhost:6200/register", {
        username,
        password,
      });

      // Log in the user immediately after registration
      const loginResponse = await axios.post("http://localhost:6200/login", {
        username,
        password,
      });

      // Save the token and navigate to the dashboard
      localStorage.setItem("token", loginResponse.data.token);
      setAuthToken(loginResponse.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log("Registration or Login failed", err);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister} style={{ marginTop: "10px" }}>Register</button>
      <p style={{ marginTop: "20px" }}>
        <Link to="/">Back to Home</Link> | <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
