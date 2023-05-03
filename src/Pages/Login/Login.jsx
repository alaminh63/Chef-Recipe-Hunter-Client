import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../../../public/LoginPageLogo.png";
import { AuthContext } from "../../Contexts/AuthContexts";
const Login = () => {
  const { loginUser, SignInWithGooglePopup } = useContext(AuthContext);

  const handleGoogle = () => {
    SignInWithGooglePopup()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div
        onSubmit={handleSubmit}
        className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur- max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src={Logo} width="180" alt="" srcset="" />
              <h1 className="mb-2 text-2xl">Register Here</h1>
              <span className="text-gray-300">Enter Your Details</span>
            </div>
            <form action="#">
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none  focus:bg-slate-500   bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline backdrop-blur-md"
                  type="email"
                  name="email"
                  placeholder="address@email.com"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none focus:bg-slate-500  bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="*********"
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className=" rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md outline transition-colors duration-300 hover:bg-green-600"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="grid grid-cols-2 gap-1 mt-8">
              <button
                onClick={handleGoogle}
                type="button"
                className="transition duration-200 border border-gray-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:bg-green-600  hover:shadow-md font-normal text-center inline-block"
              >
                Google
              </button>
              <button
                type="button"
                className="transition duration-200 border border-gray-200  w-full py-2.5 rounded-lg text-sm shadow-sm hover:bg-green-600 hover:shadow-md font-normal text-center inline-block"
              >
                Github
              </button>
            </div>

            <div className="grid grid-cols mt-5">
              <p className="transition duration-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-lg hover:bg-green-600 font-normal text-center">
                <Link to="/register">Didn't Have An Account?</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
