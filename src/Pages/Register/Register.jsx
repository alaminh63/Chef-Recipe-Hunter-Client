import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/LoginPageLogo.png";
import { AuthContext } from "../../Contexts/AuthContexts";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    createUser,
    setUser,
    SignInWithGooglePopup,
    signInWithGitHub,
    profileInfoUpdate,
  } = useContext(AuthContext);

  const handleGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setUser(null);
        setSuccess("Acount Success ");
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
        setUser(null);
        setSuccess("Acount Create Success");
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
    const photoURL = form.photoURL.value;
    const displayName = form.userName.value;

    console.log(photoURL, displayName);

    if (password.length < 6) {
      return setError("Password Atleast 6 Character Long");
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        profileInfoUpdate(displayName, photoURL)
          .then(console.log("info updated"))
          .catch((error) => {
            console.error(error);
          });
        setError("");
        setUser(null);
        setSuccess("Acount Create Success");
      })
      .catch((error) => {
        console.error(error);
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
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg shadow-zinc-50 backdrop-blur- max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <img
                src="https://raw.githubusercontent.com/AlaminHasanPro/g3-architects/main/LoginPageLogo.png"
                width="180"
                alt=""
                srcset=""
              />
              <h1 className="mb-2 text-2xl">Register Here</h1>
              <span className="text-gray-300">Enter Your Details</span>
            </div>
            <form action="#">
              <div className="grid md:grid-cols-2 items-center gap-8 ">
                <div>
                  <div className="mb-4 text-lg">
                    <input
                      className="rounded-3xl border-none  focus:bg-slate-500   bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline backdrop-blur-md  "
                      type="text"
                      name="userName"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4 text-lg">
                    <input
                      className="rounded-3xl border-none  focus:bg-slate-500   bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline backdrop-blur-md"
                      type="text"
                      name="photoURL"
                     
                      placeholder="Photo URL -example.com"
                    />
                  </div>
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
                  <div className="grid grid-cols mt-5">
                    <Link to="/login">
                      <p className="transition duration-200 w-full py-2. rounded-lg text-sm shadow-sm hover:shadow-lg hover:bg-green-600 font-normal text-center">
                        Already Have An Account?
                      </p>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="flex justify-center text-lg text-black">
                    <button
                      type="submit"
                      className=" rounded-3xl bg-green-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md outline transition-colors duration-300 hover:bg-green-600"
                    >
                      Register
                    </button>
                  </div>

                  <div className="grid grid-cols mt-5">
                    <p className="text-center">
                      <p>Or</p>
                      Sign In With
                    </p>
                  </div>
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
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
