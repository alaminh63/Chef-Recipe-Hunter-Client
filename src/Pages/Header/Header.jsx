import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="banner-image ">
      
        <div className=" md:max-w-[1200px] mx-auto flex items-center justify-center h-full w-full md:flex  md:items-center md:justify-between flex-wrap-reverse   ">
          <div class="stats  drop-shadow-2xl	 shadow-lg shadow-blue-700/50 bg-gradient-to-r text-white from-blue-700 to-purple-900    ">
            <div class="grid grid-cols-1 gap-4sm:grid-cols-2 md:grid-cols-3 ">
              <div class="stat place-items-center">
                <div class="">Downloads</div>
                <div class="stat-value">31K</div>
                <div class="stat-desc text-white">
                  From January 1st to February 1st
                </div>
              </div>
              <div class="stat place-items-center">
                <div class="">Users</div>
                <div class="stat-value  ">4,200</div>
                <div class="stat-desc   text-white">↗︎ 40 (2%)</div>
              </div>
              <div class="stat place-items-center">
                <div class="">New Registers</div>
                <div class="stat-value">1,200</div>
                <div class="stat-desc  text-white"> 90 (14%)</div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl text-white ">
              <span className="md:text-7xl text-5xl">Loved By You,</span>
              <br />
              <span>Cooked By Us</span>
            </h1>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Header;
