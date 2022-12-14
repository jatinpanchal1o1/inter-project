import React from "react";
import Bell_icon from "../assets/Dazzie_Icons/NotificationBell.svg";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="rightSide">
        <a>
          <Avatar alt="Logo" src="../assets/Dazzie Icons/logo.jpg" />
        </a>
        <h2>Dazzie</h2>
      </div>
      <div className="leftSide">
        <ul className="profileSide">
          <li className="bell_icon icon">
            {/* <Popover
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              The content of the Popover.
            </Popover> */}

            <img src={Bell_icon} alt="Bell icon" />
          </li>
          <div className="profileShow">
            <li className="avatar_icon icon">
              <Avatar alt="Sumanto" src="../assets/Dazzie Icons/avatar.jpg" />
            </li>
            <li id="accountName">
              <p>
                <span className="account_name">Sumanto</span>
              </p>
              <p>
                <span className="account_type">Cashier</span>
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
