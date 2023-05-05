import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";
import Trusted from "../Trusted/Trusted";

const Home = () => {
  const information = useLoaderData();
  console.log(information);
  return (
    <div>
      <Header></Header>
      <div className="md:max-w-[1200px] mx-auto my-8 grid md:grid-cols-3 gap-5">
        {information.map((info) => (
          <div className="">
            <Cards info={info} key={info.id}></Cards>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-bold text-center my-4">Our Services </h2>
      </div>
      <section className="h-full flex md:max-w-[1200px] mx-auto my-5 flex-col bg-gray-100 dark:bg-gray-700 shadow-xl overflow-y-scroll">
        <div className="grid rounded-2xl divide-y divide-dashed hover:divide-solid justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-3">
          <div className="col-span-1 p-3">
            <div className="flex flex-col  items-center">
              <a href="">
                <button className="tr-300">
                  <span className="text-3xl font-bold text-orange-700 ">
                    Our Resturants
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1 p-3">
            <div className="flex flex-col items-center">
              <a href="">
                <button className="tr-300">
                  <span className="text-3xl font-bold text-orange-700 ">
                    Country
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1 p-3">
            <div className="flex flex-col items-center">
              <a href="">
                <button className="tr-300">
                  <span className="text-3xl font-bold text-orange-700 ">
                    Chefs
                  </span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1 bg-red-200 rounded-lg p-5">
            <div className="flex flex-col items-center">
              <a href="">
                <button className="tr-300">
                  <span className="text-lg font-medium">1754+</span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1  bg-red-200 rounded-lg p-5">
            <div className="flex flex-col items-center">
              <a href="">
                <button className="tr-300">
                  <span className="text-lg font-medium">18 Countrys</span>
                </button>
              </a>
            </div>
          </div>
          <div className="col-span-1 bg-red-200 rounded-lg p-5">
            <div className="flex flex-col items-center">
              <a href="">
                <button className="tr-300">
                  <span className="text-2xl font-medium">3242+</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="flex mx-auto mt-3 w-100 ">
          <button className="p-2 shadow-lg rounded-2xl my-5 tr-300 w-100 font-medium  bg-green-500 rounded-md hover:bg-green-600 text-gray-50">
            Contact Us For Food And Recipe Service
          </button>
        </div>
      </section>
      <Trusted></Trusted>
    </div>
  );
};

export default Home;
