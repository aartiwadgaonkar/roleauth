import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { Provider } from "react-redux";
import reduxStore from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/User";

const App = () => {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Navbar/> */}
    </Provider>
  );
};

export default App;
