import React, { useEffect } from "react";
import "./accountDetails.css";
import logoImage from "../../images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
const AccountDetails = ({ customer, balance }) => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!customer) {
      navigate("/");
    }
  }, []);

  console.log(customer);
  return (
    <div className="accountdetails-container">
      <div className="accountDetials-image-container"></div>
      <div className="accountDetails-text-container">
        <img src={logoImage} alt="" />
        <h2>Account Details:</h2>
        <p>Username: {customer.username} </p>
        <p>Account Number: {customer.accountNumber}</p>
        <p>Branch: {customer.branch}</p>
        <p>Phone Number: {customer.phoneNumber}</p>
        <p>Available Balance: {balance > 0 ? balance : customer.balance}</p>
      </div>
    </div>
  );
};

export default AccountDetails;
