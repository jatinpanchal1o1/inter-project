import * as React from "react";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Order_icon from "../assets/Dazzie_Icons/orders.svg";
import Customer_icon from "../assets/Dazzie_Icons/customer.svg";
import Package_icon from "../assets/Dazzie_Icons/Package.svg";
import Coupon_icon from "../assets/Dazzie_Icons/Coupon.svg";
import User_icon from "../assets/Dazzie_Icons/user.svg";
import Setting_icon from "../assets/Dazzie_Icons/seettings.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const style = { color: "#92929D", fontSize: "1.5em" };

const Sider_Bar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [state, setState] = useState(false);
  const [styled, setStyled] = useState({
    display: "none",
  });

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);
  }, []);

  const handler = () => {
    setState(!state);
    state === true
      ? setStyled({ display: "none" })
      : setStyled({ display: "block" });
    console.log(styled);
    console.log(state);
  };

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className="container">
      {(state || screenWidth > 899) && (
        <div
          className={`Sidebar ${
            state && screenWidth < 899 ? "slide-fwd-right" : ""
          }`}
        >
          <div className="topSide">
            <ul className="topList">
              <li className={splitLocation[1] === "" ? "active" : ""}>
                <NavLink to="/">
                  <AiOutlineAppstore class="changeColor" />
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
      )}
      <div className="aiMenu">
        <AiOutlineMenu style={style} onClick={handler} />
      </div>
    </div>
  );
};

export default Sider_Bar;
