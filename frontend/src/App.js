import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import AccountDetails from "./pages/AccountDetails/AccountDetails";

const App = () => {
  const [customer, setCustomer] = useState("");

  const updateCustomer = (userData) => {
    setCustomer(userData);
    console.log(customer);
  };
  return (
    <BrowserRouter>
      <Navbar customer={customer} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/login"
          element={<Login updateCustomer={updateCustomer} />}
        />
        <Route path="/register" element={<Registration />} />
        <Route
          path={"/account-details"}
          element={<AccountDetails customer={customer} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
