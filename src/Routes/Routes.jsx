import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Details from "../Pages/Details/Details";
import NewToyAdd from "../Pages/NewToyAdd/NewToyAdd";
import ToyAdd from "../Pages/ToyAdd/ToyAdd";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "details/:id",
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`https://car-toy-market-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "newtoyadd",
        element: <PrivateRoutes><NewToyAdd></NewToyAdd></PrivateRoutes>,
      },
      {
        path: "toyadd/:id",
        element: <ToyAdd></ToyAdd>,
        loader: ({ params }) =>
          fetch(`https://car-toy-market-server.vercel.app/toys/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
