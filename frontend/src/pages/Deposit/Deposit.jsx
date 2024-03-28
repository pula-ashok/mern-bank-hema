import React, { useEffect, useState } from "react";
import "./deposit.css";
import logoImage from "../../images/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert";

const Deposit = ({ customer, updateBalance }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!customer) {
      navigate("/login");
    }
  }, []);
  const [depositData, setDepositData] = useState({
    username: customer.username,
    accountNumber: customer.accountNumber,
    date: "",
    depositAmount: "",
    depositType: "",
  });
  const handleDeposit = async (e) => {
    e.preventDefault();
    console.log(depositData);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/customer/deposit",
        depositData
      );

      if (response) {
        console.log(response);

        Swal({
          title: "Deposit successful",
          text: "Amount deposited :" + depositData.depositAmount,
          icon: "success",
        });
        updateBalance(response.data.balance);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClear = () => {
    console.log("first");
    setDepositData({
      ...depositData,
      date: "",
      depositAmount: "",
      depositType: "",
    });
  };
  return (
    <div className="deposit-container">
      <div className="deposit-image-container"></div>
      <div className="deposit-text-container">
        <form action="" onSubmit={handleDeposit}>
          <img src={logoImage} alt="" />
          <h2>Deposit Form:</h2>
          <p>Username: {depositData.username}</p>
          <p>Account Number: {depositData.accountNumber}</p>
          <label htmlFor="">Date:</label>
          <input
            type="date"
            name=""
            id=""
            value={depositData.date}
            onChange={(e) =>
              setDepositData({ ...depositData, date: e.target.value })
            }
          />
          <label htmlFor="">Deposit Amount:</label>
          <input
            type="number"
            name=""
            id=""
            value={depositData.depositAmount}
            onChange={(e) =>
              setDepositData({ ...depositData, depositAmount: e.target.value })
            }
          />
          <label htmlFor="">Deposit Type:</label>
          <input
            type="text"
            value={depositData.depositType}
            onChange={(e) =>
              setDepositData({ ...depositData, depositType: e.target.value })
            }
          />
          <button type="submit">Deposit</button>
          <button type="submit" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Deposit;
