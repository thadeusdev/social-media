import React from 'react'
import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Thadi Social.</h1>
          <p>Connect with friends and the world around you on Thadisocial</p>
          <span>Do you have an account?</span>
          <Link to='/login'>
          <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="name" placeholder='Name' />
            <input type="password" placeholder='Password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register