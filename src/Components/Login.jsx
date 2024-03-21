import React from 'react'
import { useNavigate } from "react-router-dom"
import './Login.css';  

function Login() {

    const navigate = useNavigate();
    function handleSubmit() {
       navigate("/blog")
     }
     
  return (
    <div className='lgcard'>
      <h1>LOGIN</h1>
    <h4>Enter your email</h4>
    <input type="email" placeholder="Email"/> 
    <h4>Password</h4>
    <input type="password" placeholder="Password"/>
   <div/><br/>
    <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
  }


export default Login
