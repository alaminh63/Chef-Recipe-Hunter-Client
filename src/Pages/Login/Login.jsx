import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


import { AuthContext } from "../../Contexts/AuthContexts";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
const Login = () => {
  const { loginUser, SignInWithGooglePopup, signInWithGitHub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Login Success Full");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setSuccess("");
        setError(error.message);
      });
  };

  const handleGoogle = () => {
    SignInWithGooglePopup()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Login Success Full");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setSuccess("");
        setError(error.message);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError("Password Atleast 6 Character Long");
    }

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("Login Success Full");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error.message);
        setSuccess("");
        setError(error.message);
      });
  };
  return (
    <div>
      <NavigationBar></NavigationBar>
      <div
        onSubmit={handleSubmit}
        className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-black drop-shadow-2xl shadow-md backdrop-blur- max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img src='https://raw.githubusercontent.com/AlaminHasanPro/g3-architects/main/LoginPageLogo.png' width="180" alt="" srcset="" />
              <h1 className="mb-2 text-2xl">Login Here</h1>
              <span className="text-gray-300">Enter Your Details</span>
            </div>
            <form action="#">
              <div className="mb-4 text-lg">
                <input
                  required
                  className="rounded-3xl border-none  focus:bg-slate-500   bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline backdrop-blur-md"
                  type="email"
                  name="email"
                  placeholder="address@email.com"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  required
                  className="rounded-3xl border-none focus:bg-slate-500  bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline backdrop-blur-md"
                  type="Password"
                  name="password"
                  placeholder="*********"
                />
              </div>

              <div>
                <p className="text-center ">{error}</p>
                <p className="text-center ">{success}</p>
              </div>

              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className=" rounded-3xl bg-green-500 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md outline transition-colors duration-100 hover:bg-green-600"
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
                onClick={handleGitHub}
                type="button"
                className="transition duration-200 border border-gray-200  w-full py-2.5 rounded-lg text-sm shadow-sm hover:bg-green-600 hover:shadow-md font-normal text-center inline-block"
              >
                Github
              </button>
            </div>

            <div className="grid grid-cols mt-5">
              <Link to="/register">
                <button className="transition duration-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-lg hover:bg-green-600 font-normal text-center">
                  Didn't Have An Account?
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
