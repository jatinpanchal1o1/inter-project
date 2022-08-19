import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../App.css";
import Sider_Bar from "./Sider_Bar";
import User from "../pages/user";
import Setting from "../pages/setting";
import { Routes, Route } from "react-router-dom";
import Order from "../pages/order";
import NotFound from "../pages/notFound";
import Users from "../pages/user";
import Home from "../pages/home";

const MainLayout = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Sider_Bar />
      {/* <Home /> */}
      {/* <Router> */}
      <div className="contentContainer">
        <Routes>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="order" element={<Order />} />
          <Route path="user" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {/* </Router> */}
      {props.children}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
