import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ customer, setCustomer }) => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    setCustomer("");
    navigate("/login");
  };
  return (
    <nav>
      <ul>
        <Link to={"/"} className="nav-link">
          <li>Home</li>
        </Link>
        {!customer ? (
          <>
            <li>
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/account-details"} className="nav-link">
                Account Details{" "}
              </Link>
            </li>
            <li>
              <Link to={"/deposit"} className="nav-link">
                Deposit
              </Link>
            </li>
            <li>
              <Link to={"/withdraw"} className="nav-link">
                Withdraw
              </Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
