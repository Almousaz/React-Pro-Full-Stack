import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../style.css'; // Import global styles

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4777/auth/register', { username, password });
      alert('User registered successfully');
      console.log(response.data);
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}

      {/* Navigation Links */}
      <p>Already have an account? <Link to="/login">Login here</Link></p>
      <p>Go back to <Link to="/">Home</Link></p>
    </div>
  );
};

export default Register;
