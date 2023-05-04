import React from "react";
import { Outlet } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Recipes = () => {
  return (
    <div>
      <div>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Recipes;
