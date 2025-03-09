import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navContainer">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
    </div>
  );
}

export default Navbar;