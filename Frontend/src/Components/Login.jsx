import React from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';
// import img1 from "./Images/loginimg.jpg";

function Login() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        navigate("/blog");
    }

    return (
      
        <div className="login-page">
           {/* <div/><img src={img1} alt=""/> */}
            <div className="login-card">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Enter your email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
