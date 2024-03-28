import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"} className="nav-link">
          <li>Home</li>
        </Link>
        <Link to={"/login"} className="nav-link">
          <li>Login</li>
        </Link>
        <Link to={"/register"} className="nav-link">
          <li>Register</li>
        </Link>
        <Link to={"/account-details"} className="nav-link">
          <li>Account Details</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
