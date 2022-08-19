import React from "react";
// const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       // children: new Array(4).fill(null).map((_, j) => {
//       //   const subKey = index * 4 + j + 1;
//       //   return {
//       //     key: subKey,
//       //     label: `option${subKey}`,
//       //   };
//       // }),
//     };
//   }
// );

const style = { color: "#92929D", fontSize: "1.5em" };

import { AiOutlineAppstore } from "react-icons/ai";
import Order_icon from "../assets/Dazzie_Icons/orders.svg";
import Customer_icon from "../assets/Dazzie_Icons/customer.svg";
import Package_icon from "../assets/Dazzie_Icons/Package.svg";
import Coupon_icon from "../assets/Dazzie_Icons/Coupon.svg";
import User_icon from "../assets/Dazzie_Icons/user.svg";
import Setting_icon from "../assets/Dazzie_Icons/seettings.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sider_Bar = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="container">
      <div id="Sidebar">
        <div className="topSide">
          <ul className="topList">
            <li className={splitLocation[1] === "" ? "active" : ""}>
              <NavLink to="/">
                <AiOutlineAppstore style={style} />
              </NavLink>
            </li>
            <li className={splitLocation[1] === "order" ? "active" : ""}>
              <NavLink to="order">
                <img src={Order_icon} alt="order_icon" />
              </NavLink>
            </li>
            <li className={splitLocation[1] === "customer" ? "active" : ""}>
              <NavLink to="customer">
                <img src={Customer_icon} alt="customer_icon" />
              </NavLink>
            </li>
            <li className={splitLocation[1] === "package" ? "active" : ""}>
              <NavLink to="package">
                <img src={Package_icon} alt="package_icon" />
              </NavLink>
            </li>
            <li className={splitLocation[1] === "coupons" ? "active" : ""}>
              <NavLink to="coupons">
                <img src={Coupon_icon} alt="coupon_icon" />
              </NavLink>
            </li>
            <li className={splitLocation[1] === "user" ? "active" : ""}>
              <NavLink to="user">
                <img src={User_icon} alt="user_icon" />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="bottomSide">
          <ul className="bottomList">
            <li className={splitLocation[1] === "setting" ? "active" : ""}>
              <NavLink to="/setting">
                <img src={Setting_icon} alt="setting_icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sider_Bar;
