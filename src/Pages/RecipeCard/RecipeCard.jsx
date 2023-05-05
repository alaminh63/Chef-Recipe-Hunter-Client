import React from "react";
import { useState } from "react";
import { RiCheckboxBlankCircleFill, RiStarFill } from "react-icons/ri";

const RecipeCard = ({ recipe, information, toasting }) => {
  const { recipeName, cookingMethod, foodRanking, ingredients, recipesImage } =
    recipe;
  const { bannerUrl, profileUrl } = information;
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <section className="shadow-xl mt-0 mx-auto md:max-w-[1200px] ">
        <div className="card lg:card-side bg-base-100 flex mx-auto lg:max-w-[1200px] max-w-[360px] bg-gradient-to-r from-stone-500 to-orange-300">
          <figure className="">
            <img
              className="w-[18rem] h-[18rem]  object-cover xl:w-[100rem] xl:h-[26.5rem] angle-image "
              src={recipesImage}
            />
          </figure>
          <div className="card-body">
            <div>
              <div className="flex justify-between">
                <div>
                  <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                    {recipeName}
                  </h1>
                  <h2 className="flex items-center gap-1 text-xl">
                    <RiStarFill></RiStarFill>
                    {foodRanking}/10
                  </h2>
                </div>

                <div>
                  <div class="flex mx-auto mt-3 w-100 ">
                    <button
                      onClick={() => {
                        setClicked(!clicked);
                        toasting();
                      }}
                      className="p-2 shadow-lg flex items-center gap-2 text-center rounded-2xl tr-300 w-100 font-medium  bg-green-500  hover:bg-green-600 text-gray-50"
                    >
                      {!clicked ? (
                        <span> Add Favorite </span>
                      ) : (
                        <span>Added</span>
                      )}

                      <RiCheckboxBlankCircleFill></RiCheckboxBlankCircleFill>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <span className="inline-block w-20 h-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-5 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="">
              <div className="text-center border-1 rounded-2xl shadow-xl py-2 bg-gradient-to-l from-slate-400 border-rose-700">
                <span className="text-2xl font-semibold">Ingredients:</span>
                <span className="-2 flex gap-3 text-center text-black  rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                  {ingredients.map((i) => (
                    <p>
                      <li>{i}</li>
                    </p>
                  ))}
                </span>
              </div>

              <div className="py-5 text-center md:mx-4 md:mt-0">
                <p className="text-2xl underline">Cooking Method</p>
                <p className="mt-3 text-center text-black-500 dark:text-gray-300">
                  {cookingMethod}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipeCard;
