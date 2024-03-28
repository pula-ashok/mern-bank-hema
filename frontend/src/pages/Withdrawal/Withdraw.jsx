import React, { useEffect, useState } from "react";
import "./withdraw.css";
import logoImage from "../../images/Logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert";

const Withdraw = ({ customer, updateBalance }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!customer) {
      navigate("/login");
    }
  }, []);
  const [withdrawData, setWithdrawData] = useState({
    username: customer.username,
    accountNumber: customer.accountNumber,
    withdrawAmount: "",
    withdrawType: "",
  });
  const handlewithdraw = async (e) => {
    e.preventDefault();
    console.log(withdrawData);
    try {
      const response = await axios.post(
        "http://localhost:3001/api/customer/withdraw",
        withdrawData
      );

      if (response) {
        Swal({
          title: "withdraw successful",
          text: "Amount withdrawed :" + withdrawData.withdrawAmount,
          icon: "success",
        });
        updateBalance(response.data.balance);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleClear = () => {
    setWithdrawData({
      ...withdrawData,
      date: "",
      withdrawAmount: "",
      withdrawType: "",
    });
  };
  return (
    <div className="withdraw-container">
      <div className="withdraw-image-container"></div>
      <div className="withdraw-text-container">
        <form action="" onSubmit={handlewithdraw}>
          <img src={logoImage} alt="" />
          <h2>Withdraw Form:</h2>
          <p>Username: {withdrawData.username}</p>
          <p>Account Number: {withdrawData.accountNumber}</p>

          <label htmlFor="">withdraw Amount:</label>
          <input
            type="number"
            name=""
            id=""
            value={withdrawData.withdrawAmount}
            onChange={(e) =>
              setWithdrawData({
                ...withdrawData,
                withdrawAmount: e.target.value,
              })
            }
            required
            placeholder="Withdraw Amount"
          />
          <label htmlFor="">withdraw Type:</label>
          <input
            type="text"
            value={withdrawData.withdrawType}
            onChange={(e) =>
              setWithdrawData({ ...withdrawData, withdrawType: e.target.value })
            }
            required
            placeholder="Withdraw Type"
          />
          <button type="submit">Withdraw</button>
          <button type="submit" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdraw;
