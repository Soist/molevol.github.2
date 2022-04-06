import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="nav-links">
            <button className="btn">Home</button>
          </Link>
          <Link to="/upload" className="nav-links">
            <button className="btn">Upload</button>
          </Link>
          <Link to="/drop-off" className="nav-links">
            <button className="btn">Drop-off</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
