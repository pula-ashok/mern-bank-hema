import React, { useState } from "react";
import "./registration.css";
import axios from "axios";
import logoImage from "../../images/Logo.png";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    accountNumber: "",
    branch: "",
    phonenumber: "",
  });
  const navigate = useNavigate();
  const handleClear = () => {
    setSignupData({
      username: "",
      password: "",
      accountNumber: "",
      branch: "",
      phonenumber: "",
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(signupData);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/customer/signup",
        signupData
      );
      console.log(response);
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup-container">
      <div className="image-signup-container"></div>
      <div className="signup-text">
        <img src={logoImage} alt="" />
        <form action="" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name=""
              id="username"
              value={signupData.username}
              onChange={(e) =>
                setSignupData({ ...signupData, username: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name=""
              id="password"
              value={signupData.password}
              onChange={(e) =>
                setSignupData({ ...signupData, password: e.target.value })
              }
              maxLength={8}
              required
            />
          </div>
          <div>
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="number"
              name=""
              id="accountNumber"
              value={signupData.accountNumber}
              onChange={(e) => {
                if (e.target.value.length <= 14) {
                  setSignupData({
                    ...signupData,
                    accountNumber: e.target.value,
                  });
                }
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="branch">Branch:</label>
            <input
              type="text"
              name=""
              id="branch"
              value={signupData.branch}
              onChange={(e) =>
                setSignupData({ ...signupData, branch: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="phonenumber">Registered Phone Number:</label>
            <input
              type="number"
              name=""
              id="phonenumber"
              value={signupData.phonenumber}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setSignupData({ ...signupData, phonenumber: e.target.value });
                }
              }}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
            <button type="submit" onClick={handleClear}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
