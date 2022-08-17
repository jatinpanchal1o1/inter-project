import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Sider_Bar from "./Sider_Bar";
import Site_Content from "./Site_Content";

const MainLayout = (props) => {
  return (
    <div>
      <Navbar />
      <Sider_Bar />
      <Site_Content />
      {/* <hr />
      {props.children}
      <hr /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
