import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {

let [name , setName ] = useState()
let [email , setEmail ] = useState()
let [password , setPassword ] = useState()
const navigate = useNavigate()

const handleSubmit = (e) =>{
  e.preventDefault()
  axios.post('http://localhost:3001/register',{name , email , password})
  .then(result=>{console.log(result)})
  navigate('/login')
  .catch(err =>{console.log(err)})
}
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded w-25 shadow">
        
       

        <h2 className="text-center mb-3">Register</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            autoComplete="off"
            className="form-control rounded mb-3"
            onChange={(e)=>{ setName(e.target.value)}}
          
          />

          {/* Email */}
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            autoComplete="off"
            className="form-control rounded mb-3"
            onChange={(e)=>{ setEmail(e.target.value)}}

        
          />

          {/* Password */}
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="form-control rounded mb-3"
            onChange={(e)=>{ setPassword(e.target.value)}}

         
          />

          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
          <br />
          <br />
          </form>

          
           {/* Already have account */}
        <div className="text-end mb-2">
          <span className='me-5'>Already have an account?</span>
          <br />
          <Link to="/login" type="submit" className="btn btn-outline-primary w-100">
            Login
            </Link>

        </div>
      </div>
    </div>
  )
}

export default Signup
