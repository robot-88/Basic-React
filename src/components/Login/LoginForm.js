import React from 'react'
import './LoginForm.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
          <input type='text' placeholder='Username'/>
          {/* <FaUser className='icon' /> */}
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' />
          {/* <FaLock className='icon' /> */}
        </div>
        <div className='input-remember'>
         <label> <input type='checkBox'/> Remember me</label> 
         <a href='#'>Forgot Password</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'>
          <p>Don't have an account?<a href="#">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
