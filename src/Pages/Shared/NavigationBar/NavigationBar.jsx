import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthContexts";
import { FaUserCircle } from "react-icons/fa";
import LazyLoad from "react-lazy-load";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.error(error);
      });
  };

  const lazyLoadStyle = {
    opacity: 0,
    transition: "all 2s ease-in-out",
  };
  return (
    <div className="navbar bg-gradient-to-r from-amber-600 bg-transparent text-white">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content   font-semibold mt-3 p-2 shadow bg-base-100 bg-transparent rounded-box w-52"
            >
              <li>
                <NavLink className={({ isActive }) => isActive ? "text-red-700" : ""} to="/">Home</NavLink>
              </li>

              <li>
                <NavLink  className={({ isActive }) => isActive ? "text-red-700" : ""} to="/blog">Blogs</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="bg-gradient-to-r px-5 py-2 rounded-lg shadow from-blue-700 normal-case text-3xl font-bold"
          >
            <span className=""> Star-</span>
            <span className="">Chef</span>
          </Link>
        </div>
        <div className="navbar-center text-xl font-semibold hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink className={({ isActive }) => isActive ? "text-black" : ""} to="/">Home</NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => isActive ? "text-black" : ""} to="/blog">Blogs</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <LazyLoad className="h-full   ">
            <div className="">
              <div
                className="tooltip  tooltip-left"
                data-tip={user?.displayName}
              >
                {user?.photoURL ? (
                  <img className="h-12 w-12 rounded-full" src={user.photoURL} />
                ) : (
                  user && <FaUserCircle className="h-12 w-12" />
                )}
              </div>
            </div>
          </LazyLoad>
          {user ? (
            <Link onClick={handleLogout} className="btn mx-5">
              Log Out
            </Link>
          ) : (
            <Link className="btn mx-5" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
