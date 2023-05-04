import React from "react";

const RecipeCard = ({ recipe }) => {
  const { recipeName, cookingMethod, foodRanking } = recipe;
  return (
    <div>
      <section className="shadow-xl mt-0 mx-auto md:max-w-[1200px] ">
        <div className="card lg:card-side bg-base-100 flex mx-auto lg:max-w-[1200px] max-w-[360px] bg-gradient-to-r from-stone-500 to-orange-300">
          <figure className="">
            <img
              className="w-[18rem] h-[18rem]  object-cover xl:w-[20rem] xl:h-[20rem] angle-image "
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
              alt=""
            />
          </figure>
          <div className="card-body">
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-xl dark:text-white">
                explore our <br /> awesome Components
              </h1>

              <div className="mt-2">
                <span className="inline-block w-20 h-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-5 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500"></span>
                <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500"></span>
              </div>
            </div>
            <div className="md:flex md:items-start md:-mx-4">
              <span className="inline-block p-2 text-blue-500 bg-blue-100 rounded-xl md:mx-4 dark:text-white dark:bg-blue-500">
                LL
              </span>

              <div className="mt-4 md:mx-4 md:mt-0">
                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  {recipeName}
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-300">
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
