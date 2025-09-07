import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [error, setError] = useState("")   // 🔴 error state
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result.data)   // ✅ this prints only "success" or "no record was exist"
        if (result.data === 'success') {
          navigate('/home')
        } else {
          setError(result.data)   // 🔴 set error message
        }
      })
      .catch(err => {
        console.log(err)
        setError("Something went wrong. Please try again.")
      })
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded w-25 shadow">

        <h2 className="text-center mb-3">Login</h2>

        {/* 🔴 Show error as popup */}
        {error && (
          <div className="alert alert-danger text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
            className="form-control rounded mb-3"
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password */}
          <label htmlFor="password"><strong>Password</strong></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="form-control rounded mb-3"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>

        {/* Already have account */}
        <div className="text-end mt-3">
          <span className="me-5">Don’t have an account?</span>
          <Link to="/register" className="btn btn-outline-primary w-100">Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
