import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:4100/auth/login", values);
            if (response.status === 200) {
              localStorage.setItem("token", response.data.token); // Store token
              navigate("/welcome"); // Redirect to Welcome page
            }
         } catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }
  return (
    <div className="flex justify-center items-center h-screen">
  <div className="shadow-lg px-8 py-5 border w-72 bg-white">
    <h2 className="text-lg font-bold mb-4 text-center">Login</h2>
    <form onSubmit={handleSumbit}>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="email"
          onChange={handleChanges}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="password"
          onChange={handleChanges}
        />
      </div>
      {error && (
        <div className="text-red-600 bg-red-100 p-2 rounded mb-4 border border-red-400">
          {error}
        </div>
      )}
      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-all duration-300">
        Submit
      </button>
    </form>
    <div className="text-center mt-4">
      <span className="text-gray-600">Don't Have an Account? </span>
      <Link to="/register" className="text-blue-500 hover:underline">
        Signup
      </Link>
    </div>
  </div>
</div>

  )
}

export default Login