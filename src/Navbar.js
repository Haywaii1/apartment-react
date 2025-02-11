import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return(
        <div className="navbar">
            <nav className='nav-container'>
            <nav className="navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <div className="float-right" style={{ display: "flex" }} >
              <li ><Link to="/register">Register</Link></li>
              <li ><Link to="/login">Login</Link></li>
            </div>
            
          </ul>
        </nav>

            </nav>

        </div>
    )
}

export default Navbar;