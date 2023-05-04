import React from "react";
import { Outlet } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Recipes = () => {
  return (
    <div>
      <div>
        <Outlet></Outlet>
        <div className="grid md:grid-cols-2 grid-cols-1 "></div>
      </div>
    </div>
  );
};

export default Recipes;
