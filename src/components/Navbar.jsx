import React from "react";
import './Navbar.css';
import { Link, useLocation} from "react-router-dom";

function Navbar() {

  const location = useLocation();
  let path = location.pathname;

  return (
    <div className="navContainer">
        <Link to="/" className={path === "/" ? 'active' : ''}>HOME</Link>
        <Link to="/about" className={path === "/about" ? 'active' : ''}>ABOUT</Link>
        <Link to="/contact" className={path === "/contact" ? 'active' : ''}>CONTACT</Link>
    </div>
  );
}

export default Navbar;