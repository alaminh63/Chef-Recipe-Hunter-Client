import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Header from "../pages/shared/Header/Header";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Home></Home>
    </div>
  );
};

export default Main;
