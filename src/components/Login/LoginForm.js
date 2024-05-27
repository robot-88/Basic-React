import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <div className='loginform'>Login Form    
    <div className='inputarea'>
      <input type='text' placeholder='Username' className='text-area'/>
      <input type='password' placeholder='Password' className='text-area'></input>
      <button type='submit' className="login-btn">Login</button>
    </div>
    </div>
  )
}

export default LoginForm