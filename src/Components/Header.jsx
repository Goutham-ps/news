// Components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Header.css'; // Ensure the path is correct
import logo from '../Assets/logo.png'; // Replace with the correct path to your logo
import About from './About';
const Header = () => {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Website Logo" className="logo-img" />
          <span className="company-name">DAILY BUGGLE</span> {/* Add your company name here */}
        </div>
        <ul>
          <li>
            <Link to="/Home" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/About" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
