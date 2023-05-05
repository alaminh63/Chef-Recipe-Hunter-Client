import React from "react";

const Trusted = () => {
  return (
    <div>
      <div className="container">
        <section className=" md:max-w-[1200px] mx-auto mt-[140px] mb-24">
          <h2 className="text-3xl font-bold text-center mb-10 underline">
            Trusted <span className="text-yellow-500">By</span>
          </h2>
          <div className="flex items-center gap-5 ui-container flex-wrap">
            <img
              className="w-[200px] mt-6 md:mt-auto mx-auto"
              src="https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <img
              className="w-[200px] mt-6 md:mt-auto mx-auto"
              src="https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <img
              className="w-[200px] mt-6 md:mt-auto mx-auto"
              src="https://images.pexels.com/photos/7176317/pexels-photo-7176317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <img
              className="w-[200px] mt-6 md:mt-auto mx-auto"
              src="https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <img
              className="w-[200px] mt-6 md:mt-auto mx-auto"
              src="https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Trusted;
