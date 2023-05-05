import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthContexts from "./Contexts/AuthContexts.jsx";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContexts>
      <RouterProvider router={router}></RouterProvider>
    </AuthContexts>
  </React.StrictMode>
);
