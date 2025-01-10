import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Ali's Web App</h1>
      <p>This is a secure platform where you can manage your profile, explore dashboards, and learn more about us.</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/login" style={{ margin: "10px", textDecoration: "none", fontSize: "18px" }}>
          Login
        </Link>
        <Link to="/register" style={{ margin: "10px", textDecoration: "none", fontSize: "18px" }}>
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
