import React from 'react'

import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";

import Swal from "sweetalert2";
import { AuthContext } from '../provider/AuthProvider';



const Login = () => {



    const { loggedUser } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Optional loading state

  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true); // Set loading to true when login starts
  
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      const from = location?.state?.from?.pathname || "/";
  
      try {
        const result = await loggedUser(email, password);
        console.log("Logged in:", result.user);
  
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
  
        navigate(from, { replace: true });
      } catch (error) {
        console.error(error.message);
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading after login attempt
      }
    };


  return (
    <>

<div className="flex flex-col items-center justify-center mt-10">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input input-bordered w-full mb-3"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered w-full mb-3"
          required
        />

        <p className="text-sm mb-4">
          Create an account?{" "}
          <Link to="/SignUp" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>

        <button
          type="submit"
          className={`btn btn-primary w-full ${loading && "opacity-50"}`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="text-red-500 mt-3 text-sm">{error}</p>}
      </form>
    </div>


      
    </>
  )
}

export default Login
