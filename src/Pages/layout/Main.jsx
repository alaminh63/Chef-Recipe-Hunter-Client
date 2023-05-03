import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Link to="/register" className="text-4xl">
        Register
      </Link>
      <Link to="/login" className="text-4xl">
        login
      </Link>
    </div>
  );
};

export default Main;
