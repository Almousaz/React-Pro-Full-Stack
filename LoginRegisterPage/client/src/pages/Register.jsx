import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../style.css'; // Import global styles

// Reusable Input Component
const InputField = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    required
  />
);

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:4777/auth/register', { username, password });
  //     alert('User registered successfully');
  //     console.log(response.data);
  
  //     // Assuming your API returns a token on successful registration
  //     localStorage.setItem('token', response.data.token);  // Save the token to localStorage
  
  //     // Update authentication status
  //     setIsAuthenticated(true);
  //     console.log('Navigating to dashboard...');
  //     navigate('/dashboard');
  //   } catch (error) {
  //     setErrorMessage(error.response?.data?.message || 'An error occurred');
  //   }
  // };
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:4777/auth/register', { username, password });
  //     console.log('User registered:', response.data);
  //     navigate('/dashboard'); // Try without alert
  //   } catch (error) {
  //     setErrorMessage(error.response?.data?.message || 'An error occurred');
  //   }
  // };
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('http://localhost:4777/auth/register', { username, password });
  //     console.log('User registered:', response.data);
  //     // Use window.location as fallback
  //     window.location.href = '/dashboard';
  //   } catch (error) {
  //     setErrorMessage(error.response?.data?.message || 'An error occurred');
  //   }
  // };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4777/auth/register', { username, password });
      console.log('User registered:', response.data);
  
      // Store the token in localStorage
      localStorage.setItem('token', response.data.token); // Assuming you return a token
      setIsAuthenticated(true); // Update the state
  
      // Redirect to the dashboard
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    }
  };
  
  
  
  
  

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
