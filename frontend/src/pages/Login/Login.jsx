import React, { useState } from "react";
import "./login.css";
import logoImage from "../../images/Logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ updateCustomer }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  const handleClear = () => {
    setLoginData({
      username: "",
      password: "",
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/customer/login",
        loginData
      );
      if (response) {
        updateCustomer(response.data.customer);
        setLoginError("");
        navigate("/account-details", {
          state: { customer: response.data.customer },
        });
      }
    } catch (error) {
      setLoginError("Inavlid username or password,please try again");
    }
  };
  return (
    <div className="login-container">
      <div className="image-login-container"></div>
      <div className="login-text">
        <img src={logoImage} alt="" />
        <form action="" onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name=""
              id="username"
              value={loginData.username}
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
              required
              placeholder="Username"
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name=""
              id="password"
              value={loginData.password}
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
              maxLength={8}
              required
              placeholder="Password"
            />
          </div>

          <div>
            <h3 className="error-message">{loginError && loginError}</h3>
            <button type="submit">Login</button>
            <button type="submit" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
        <p>Welcome back! Log in to manage your finances securely. </p>
        <p> If you're new here, sign up for an account to get started. </p>
        <p>Explore our features to make the most of your banking experience.</p>
        <p>We prioritize your security.</p>
        <p>Rest assured, your data is safe with us.</p>
        <p>24/7 customer support is available. Contact us for assistance.</p>
      </div>
    </div>
  );
};

export default Login;
