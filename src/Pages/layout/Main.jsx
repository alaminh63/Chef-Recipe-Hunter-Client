import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
