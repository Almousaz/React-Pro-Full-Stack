import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/auth/getUsers');
        const data = await response.json();
        setUsers(data.user.filter((user) => user.username !== 'admin'));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <b>Username</b> =&gt; {user.username} <br />
            <b>Role</b> =&gt; {user.role}
          </li>
        ))}
      </ul>
      <button className="logout">
        <a href="/logout">Log Out</a>
      </button>
    </div>
  );
};

export default User;
