import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Header from "../Header/Header";

const Home = () => {
  const information = useLoaderData();
  console.log(information)
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
    </div>
  );
};

export default Home;
