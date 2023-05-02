import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import NavigationBar from "../pages/shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
