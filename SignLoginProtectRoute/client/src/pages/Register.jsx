import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
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
            const response = await axios.post('http://localhost:4100/auth/register', values)
            if(response.status === 201) {
                navigate('/login')
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
    <h2 className="text-lg font-bold mb-4 text-center">Register</h2>
    <form onSubmit={handleSumbit}>
      <div className="mb-4">
        <label htmlFor="username" className="block text-gray-700">
          Username
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="username"
          onChange={handleChanges}
        />
      </div>
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
      <span className="text-gray-600">Already have an account? </span>
      <Link to="/login" className="text-blue-500 hover:underline">
        Login
      </Link>
    </div>
  </div>
</div>

  )
}

export default Register