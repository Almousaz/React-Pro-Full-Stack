import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login({ setAuthToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:6200/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setAuthToken(response.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.log("Login failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login</h2>
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
      <button onClick={handleLogin} style={{ marginTop: "10px" }}>Login</button>
      <p style={{ marginTop: "20px" }}>
        <Link to="/">Back to Home</Link> | <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
