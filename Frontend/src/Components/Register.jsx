import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {const response = await fetch('http://localhost:3000/register',
       {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('User registered successfully');
        navigate('/login');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="register-page">
      <div className="regcard">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Enter your name</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Name"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
