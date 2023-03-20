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
import Customers from "../pages/customer";

const MainLayout = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Sider_Bar />
      <div className="contentContainer">
        <Routes>
          <Route index path="inter-project/" element={<Home />} />
          <Route path="setting" element={<Setting />} />
          <Route path="order" element={<Order />} />
          <Route path="user" element={<Users />} />
          <Route path="customer" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {props.children}
    </div>
  );
};

export default MainLayout;
