import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Admin() {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    // Fetch the users data when the component mounts
    const getUsers = async () => {
      try {
        const res = await axios('http://localhost:6363/api/auth/getUsers');
        const data = await res.json();
        if (data.user) {
          setUsers(data.user.filter(user => user.username !== 'admin')); // Filter out the admin user
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, []);

  const handleEditRole = async (id, index) => {
    try {
      const res = await axios('http://localhost:6363/api/auth/update', {
        method: 'PUT',
        body: JSON.stringify({ role: 'admin', id }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (res.status === 400 || res.status === 401) {
        setMessage(`${data.message}. ${data.error || ''}`);
        return;
      }
      // Update users state to reflect the new role
      setUsers(prevUsers => {
        const updatedUsers = [...prevUsers];
        updatedUsers[index].role = 'admin'; // Update the role
        return updatedUsers;
      });
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  const handleDeleteUser = async (id, index) => {
    try {
      const res = await axios('http://localhost:6363/api/auth/getUser', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      if (res.status === 401) {
        setMessage(`${data.message}. ${data.error || ''}`);
        return;
      }
      // Remove the user from the state
      setUsers(prevUsers => {
        const updatedUsers = [...prevUsers];
        updatedUsers.splice(index, 1); // Remove the user at the given index
        return updatedUsers;
      });
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div style={{ backgroundColor: 'red' }}></div>
      <h1>Admin Page</h1>
      {message && <p>{message}</p>}
      <ul>
        {users.map((user, index) => (
          <li key={user.id}>
            <b>Username:</b> {user.username} <br />
            <b>Role:</b> {user.role} <br />
            <button onClick={() => handleEditRole(user.id, index)}>Edit Role</button>
            <button onClick={() => handleDeleteUser(user.id, index)}>Delete User</button>
          </li>
        ))}
      </ul>
      <Link to="/logout">
        <button>Log Out</button>
      </Link>
    </div>
  );
}

export default Admin;
