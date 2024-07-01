import React from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <Link to={"/blog"} className="nav-item"><li className="text">Home</li></Link>
          <Link to={"/AboutUs"} className="nav-item"><li className="text">About Us</li></Link>
          <Link to={"/blogcontent"} className="nav-item"><li className="text">Write</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
