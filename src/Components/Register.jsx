import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hello from './Hello';
import './Register.css';  

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    
    navigate('/Login');
  };

  return (
    <div className="regcard">
      <h1>REGISTER</h1>
      <h4>Enter your name</h4>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <h4>Enter your email</h4>
      <input
        type="email"
        name="email"
        placeholder="Email"
        // value={formData.email}
        onChange={handleInputChange}
      />
      <h4>Password</h4>
      <input
        type="password"
        name="password"
        placeholder="Password"
        // value={formData.password}
        onChange={handleInputChange}
      />
      <div/> <br/><button onClick={handleSubmit} >SUBMIT</button>
{/* 
      <Hello data={{name:'smita' , email:'agukvj' , password:'aahvaika'}}/> */}

    </div>
  );
}

export default Register;
