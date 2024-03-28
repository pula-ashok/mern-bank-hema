import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import Deposit from "./pages/Deposit/Deposit";
import Withdraw from "./pages/Withdrawal/Withdraw";

const App = () => {
  const [customer, setCustomer] = useState("");
  const [balance, setBalance] = useState(0);

  const updateCustomer = (userData) => {
    setCustomer(userData);
  };
  const updateBalance = (bal) => {
    setBalance(bal);
  };
  return (
    <BrowserRouter>
      <Navbar customer={customer} setCustomer={setCustomer} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/login"
          element={<Login updateCustomer={updateCustomer} />}
        />
        <Route path="/register" element={<Registration />} />
        <Route
          path={"/account-details"}
          element={<AccountDetails customer={customer} balance={balance} />}
        />
        <Route
          path="/deposit"
          element={
            <Deposit customer={customer} updateBalance={updateBalance} />
          }
        />
        <Route
          path="/withdraw"
          element={
            <Withdraw customer={customer} updateBalance={updateBalance} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
