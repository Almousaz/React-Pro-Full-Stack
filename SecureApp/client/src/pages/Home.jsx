import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../redux/AuthSlice";
import axios from "axios";

const Home = () => {
  const user = useSelector((state) => state.Auth.user);
  console.log(user);
  const navigate = useNavigate();
  const disptach = useDispatch();
  const gotoAdmin = () => {
    navigate("/admin");
  };

  const handleLogout = async () => {
    try {
      const request = await axios.post("http://localhost:3636/api/auth/logout");
      const resspone = request.data;
      if (request.status == 200) {
        disptach(Logout());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <div className="user-card">
        <h2> Welcome,{user && user.name}</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        {user && user.role == "admin" ? (
          <button className="admin-btn" onClick={gotoAdmin}>
            Go To admin
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
