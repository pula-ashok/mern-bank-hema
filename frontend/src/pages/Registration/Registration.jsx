import React, { useState } from "react";
import "./registration.css";

const Registration = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    accountNumber: "",
    branch: "",
    phonenumber: "",
  });
  const handleClear = () => {
    setSignupData({
      username: "",
      password: "",
      accountNumber: "",
      branch: "",
      phonenumber: "",
    });
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(signupData);
  };
  return (
    <div>
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
                setSignupData({ ...signupData, accountNumber: e.target.value });
              }
            }}
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
  );
};

export default Registration;
