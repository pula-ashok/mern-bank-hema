import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Registration />
    </div>
  );
};

export default App;
