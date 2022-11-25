import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import DashboardLayout from "../pages/Dashboard/DashboardLayout/DashboardLayout";
import AddProducts from "../pages/Dashboard/Dashboard/AddProducts";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyProducts from "../pages/Dashboard/Dashboard/MyProducts";
import Category from "../pages/Home/Categories/Category";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRouter";
import SellerRoute from "./SellerRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
        element: (
          <PrivetRoute>
            <Category />
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/add-products",
        element: (
          <SellerRoute>
            <AddProducts />
          </SellerRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProducts />
          </SellerRoute>
        ),
      },
    ],
  },
]);

export default router;
