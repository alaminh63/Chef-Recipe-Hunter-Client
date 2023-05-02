import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <div className="navbar text-white bg-base-100 flex bg-slate-800">
        <div className="flex-1">
          <a className="normal-case font-bold text-3xl mx-5 text-lime-500">Star-Chef</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="avatar gap-4">
          <div className="w-14 rounded-full">
            <img src="https://wallpaperaccess.com/full/4046703.jpg" alt="" />
          </div>
          <button className="btn  bg-lime-500">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
