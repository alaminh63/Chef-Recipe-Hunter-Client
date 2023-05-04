import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import "./ChefDetails.css";
const ChefDetails = () => {
  const information = useLoaderData();
  const { name, id, bannerUrl, recipes, profileUrl, likes, experienceYears } =
    information;
  console.log(recipes);

  return (
    <div>
      <section>
        <div className="banner-image2">
            <NavigationBar></NavigationBar>
          <div className="  flex items-center justify-center h-full w-full md:flex max-w-[1400px]  mx-auto  md:items-center md:justify-between flex-wrap-reverse   ">
            <div className="w-full">
              <div className="flex " style={{ height: "700px" }}>
                <div className="flex items-center  text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                  <div>
                    <h2 className="text-3xl font-semibold text-white md:text-7xl">
                      Build Your New <span className="text-white">Idea</span>
                    </h2>
                    <p className="mt-2 text-sm text-white md:text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Blanditiis commodi cum cupiditate ducimus, fugit harum id
                      necessitatibus odio quam quasi, quibusdam rem tempora
                      voluptates. Cumque debitis dignissimos id quam vel!
                    </p>
                    <div className="flex justify-center lg:justify-start mt-6">
                      <a
                        className="px-4 py-3 bg-blue-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                        href="#"
                      >
                        Get Started
                      </a>
                      <a
                        className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="lg:block  lg:w-1/2"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
                  }}
                >
                  <div
                    className="h-full object-cover"
                    style={{
                      backgroundImage: `url(${bannerUrl})`,
                    }}
                  >
                    <div className="h-full bg-black opacity-25"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-6 max-w-[1400px] mx-auto">
        {recipes.map((food) => (
          <div className="">
            <RecipeCard food={food}></RecipeCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
