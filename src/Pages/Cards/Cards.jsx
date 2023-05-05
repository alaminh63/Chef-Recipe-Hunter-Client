import React from "react";
import { FcLike } from "react-icons/fc";
import { Link, useLoaderData } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Cards = ({ info }) => {
  const {
    name,
    id,
    bannerUrl,
    numberOfRecipes,
    recipes,
    profileUrl,
    likes,
    experienceYears,
  } = info;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <LazyLoad className="h-full  ">
            <img className="p-2 rounded-3xl" src={profileUrl} />
          </LazyLoad>
        </figure>
        <div className="card-body bg-gradient-to-t from-purple-300 ">
          <h2 className="card-title text-red-600">Name: {name}</h2>
          <p className="text-red-700">Experience: {experienceYears} Year</p>
          <p className="text-red-700 flex items-center">
            <FcLike />
            {likes}
          </p>
          <p className="text-red-700 ">Completed Recipe: {numberOfRecipes}</p>
          <Link to={`/information/${id}`}>
            <div className="card-actions justify-end">
              <button class="block mt-5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80">
                View Recipes
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
