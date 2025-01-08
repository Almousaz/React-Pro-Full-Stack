import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'; // Import global styles

const Home = () => {
  return (
    <div>
      <h2>Welcome Home</h2>
      <p>To get started, please <Link to="/login">Login</Link> or <Link to="/register">Register</Link>.</p>
    </div>
  );
};

export default Home;
