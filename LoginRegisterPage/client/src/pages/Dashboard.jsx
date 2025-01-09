import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure axios is installed
import '../style.css'; // Import global styles

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(''); // Track any errors

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Making an authenticated request to fetch user data
      axios
        .get('http://localhost:4777/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        })
        .then((response) => {
          // Set the user data once the API responds
          setUserData(response.data); // Assuming the API returns user data in response.data
          setLoading(false); // Stop loading
        })
        .catch((err) => {
          // Handle errors (e.g., token is expired, or user is unauthorized)
          setError('Failed to fetch user data');
          setLoading(false);
        });
    } else {
      setError('No token found, please log in');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {error && <p className="error-message">{error}</p>}
      {userData ? (
        <p>Welcome back, {userData.username}!</p> // Display real username from API
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default Dashboard;
