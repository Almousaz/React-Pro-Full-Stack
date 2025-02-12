import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      email: "",
      password: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
    };

    const handleLogin = (e) => {
      e.preventDefault();

      if (user.email === "admin@gmail.com" && user.password === "admin") {
        toast.success("Admin Login Successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        navigate("/admin");
      } else {
        toast.error("Invalid Credentials!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }
    };

  return (
    <div className="sig-cont-2">
      <div className="sign-form">
        <h1>Admin Login</h1>
        <form className="form-box"
         onSubmit={handleLogin}
         >
          <div>
            <input
              placeholder="admin@gmail.com"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              placeholder="admin"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="butn">
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
