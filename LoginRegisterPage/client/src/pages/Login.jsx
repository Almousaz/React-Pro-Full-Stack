import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../style.css'; // Import global styles

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4777/auth/login', { username, password });
      localStorage.setItem('token', response.data.token); // Save token in localStorage
      setIsAuthenticated(true); // Set authentication state to true
      navigate('/dashboard'); // Redirect to dashboard after login
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      
      {/* Navigation Links */}
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
      <p>Go back to <Link to="/">Home</Link></p>
    </div>
  );
};

export default Login;
