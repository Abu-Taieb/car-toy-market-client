import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Addtoys from "../Pages/AddToys/Addtoys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },{
            path: 'alltoys',
            element: <AllToys></AllToys>
        },{
            path: 'mytoys',
            element: <MyToys></MyToys>
        },{
            path: 'addtoys',
            element: <Addtoys></Addtoys>
        },{
            path: 'blogs',
            element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;