import { createBrowserRouter } from "react-router-dom";
import Blog from "../Pages/Blog/Blog";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import Header from "../Pages/Header/Header";
import Home from "../Pages/Home/Home";
import Main from "../Pages/layout/Main";
import Recipes from "../Pages/layout/Recipes";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFoundPage from "../Pages/Shared/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://chef-recipe-hunter-server-alaminhasanpro.vercel.app/information"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "information",
    element: <Recipes></Recipes>,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunter-server-alaminhasanpro.vercel.app/information/${params.id}`
          ),
      },
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
    ],
  },
]);
export default router;
