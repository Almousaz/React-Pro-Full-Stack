import React, { useEffect, useState } from 'react';
import '../style.css'; // Import global styles

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Fetching user data or doing some token verification here
      // For now, just simulating fetching user data
      setUserData({ username: 'JohnDoe' }); // You would typically get user data from an API
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData ? (
        <p>Welcome back, {userData.username}!</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
