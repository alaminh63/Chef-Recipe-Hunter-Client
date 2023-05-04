import React from "react";
import { FaArrowRight, FaEye, FaRadiationAlt } from "react-icons/fa";

const Cards = ({ info }) => {
  const { name, bannerUrl, recipes, profileUrl, likes, experienceYears } = info;
  return (
    <div className="card h-full w-96  bg-base-100 shadow-xl ">
      <figure>
        <img className="w-100 h-64" src={bannerUrl} alt="Shoes" />
        <div class="absolute bottom-72 ml-56 flex h-[120px] w-[120px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
          <img
            class="h-full w-full rounded-full"
            src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
            alt=""
          />
        </div>
      </figure>
      <div className="card-body bg-gradient-to-t from-purple-300 ">
        <h2 className="card-title text-red-600">Name: {name}</h2>
        <p className="text-red-700">Experience: {experienceYears} Year</p>
        <p className="text-red-700">Likes:{likes}</p>
        <p className="text-red-700">
          Completed Recipe: {recipes.numberOfRecipes}
        </p>
        <div className="card-actions justify-end">
          <a
            target="_blank"
            href="food://food/1001"
            class="block mt-5 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            View Recipes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
