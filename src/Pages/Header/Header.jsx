import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="banner-image ">
        <NavigationBar></NavigationBar>
        <div className=" md:max-w-[1200px] mx-auto flex items-center justify-center h-full w-full md:flex  md:items-center md:justify-between flex-wrap-reverse   ">
          <div class="stats  drop-shadow-2xl	 shadow-lg shadow-blue-700/50 bg-gradient-to-r text-white from-blue-700 to-purple-900    ">
            <div class="grid grid-cols-1 gap-4sm:grid-cols-2 md:grid-cols-3 ">
              <div class="stat place-items-center">
                <div class="">Services Event</div>
                <div class="stat-value">334+</div>
                <div class="stat-desc text-white">
                  From January 1st to February 1st
                </div>
              </div>
              <div class="stat place-items-center">
                <div class="">Recipe Completed</div>
                <div class="stat-value  ">4,270</div>
                <div class="stat-desc   text-white">↗︎ 40 (2%)</div>
              </div>
              <div class="stat place-items-center">
                <div class="">New Resturants</div>
                <div class="stat-value">143</div>
                <div class="stat-desc  text-white"> 90 (14%)</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-white ">
              <span className="md:text-7xl text-4xl">Loved By You,</span>
              <br />
              <span className="md:text-5xl">Cooked By Us</span>
            </h1>
            <div className="mt-2">
              <span className="inline-block w-60 h-1 rounded-full bg-white"></span>
              <span className="inline-block w-5 h-1 ml-1 rounded-full bg-white"></span>
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-white"></span>
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-white"></span>
            </div>
            <div className="text-white font-semibold italic text-2xl">
              Authentic and Mouthwatering Recipes <br /> from the Best Indian
              Chefs!
            </div>
            <div className="indicator">
              <span className="indicator-item mt-5 p-3 badge badge-primary">
                14k+clients
              </span>
              <button className="btn md:px-[8rem] mt-5 bg-gradient-to-r border-0 from-green-400 to-transparent ">
                See Clients Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
