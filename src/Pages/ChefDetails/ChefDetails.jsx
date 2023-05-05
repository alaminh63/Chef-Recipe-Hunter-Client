import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import "./ChefDetails.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiAddBoxFill } from "react-icons/ri";
import LazyLoad from "react-lazy-load";

const ChefDetails = () => {
  const information = useLoaderData();
  const {
    name,
    bannerUrl,
    recipes,
    profileUrl,
    likes,
    experienceYears,
    numberOfRecipes,
    shortBio,
  } = information;
  console.log(recipes);
  const toasting = () => {
    toast("Added In Favorite");
  };

  return (
    <div>
      <section className="">
        
        <div className="banner-image2 ">
     
          <NavigationBar></NavigationBar>
      
          <div className="  flex items-center justify-center h-full w-full md:flex max-w-[1400px]  mx-auto  md:items-center md:justify-between flex-wrap-reverse   ">
            <div className="w-full">
              <div className="flex " style={{ height: "700px" }}>
                <div className=" flex ml-8 items-center  text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                  <div className="card w-[20rem] md:w-[30rem] bg-gradient-to-l from-slate-700 text-white  ">
                    <section className="h-full md:m-20 flex flex-col dark:bg-gray-700 shadow-xl">
                      <div className=" shadow-lg ">
                        <div className="flex flex-col items-center justify-evenly ">
                          
                          <img
                            className="md:hidden ml-20 rounded-s-full h-[18rem] w-[15rem]"
                            src={profileUrl}
                          />
                          <div>
                            <span className="text-h1 text-3xl   font-bold">
                              {name}
                            </span>
                          </div>
                          <div className="  md:my-6  bg-gradient-to-l from-emerald-500 py-5 rounded-3xl px-5 ">
                            <span>{shortBio}</span>
                          </div>
                        </div>

                        <div className="grid bg-gradient-to-l  from-purple-700 px-7 py-2 items-center justify-around grid-cols-3 gap-4 divide-x divide-solid">
                          <div className="col-span-1 flex flex-col items-center">
                            <span className="text-2xl text-font-bold flex items-center  dark:text-gray-500">
                              {experienceYears}{" "}
                              <RiAddBoxFill className=""></RiAddBoxFill>
                            </span>
                            <span className=" font-medium text-center">
                              Years Experience
                            </span>
                          </div>
                          <div className="col-span-1px-3 text-center flex flex-col items-center">
                            <span className="text-2xl font-bold dark:text-gray-500">
                              {numberOfRecipes}
                            </span>
                            <span className="font-medium">Best Recipe</span>
                          </div>
                          <div className="col-span-1 px-3 text-center flex flex-col items-center">
                            <span className="text-2xl font-bold dark:text-gray-500">
                              {likes}
                            </span>
                            <span className="font-medium">Likes</span>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>

                <div
                  className="lg:block  lg:w-1/2"
                  style={{
                    clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)",
                  }}
                >
                  <LazyLoad className="h-full  "> 
                    <div 
                      className="h-full threshold={0.95}  onContentVisible={() => {console.log('loaded!')}} object-cover is-visible LazyLoad "
                      style={{
                        backgroundImage: `url(${profileUrl})`,
                        backgroundRepeat: "no-repeat",

                        
                      }}
                    ></div>
                    
                  </LazyLoad>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <div className="grid grid-cols gap-10 max-w-[1400px] mx-auto mt-28">
        <h2 className=" text-4xl text-center  font-bold underline bottom-1">
          Best Recipes
        </h2>
        {recipes.map((recipe, i) => (
          <div className="mb-5">
            <RecipeCard
              information={information}
              toasting={toasting}
              recipe={recipe}
              key={i}
            ></RecipeCard>
          </div>
        ))}
      </div>

    
      <ToastContainer></ToastContainer>
     
    </div>
  );
};

export default ChefDetails;
