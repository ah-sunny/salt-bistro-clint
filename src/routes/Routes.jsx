import {
  createBrowserRouter
} from "react-router-dom";

import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/Shop/OurShop";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/menu',
          element: <OurMenu></OurMenu>
        },
        {
          path: '/shop',
          element: <OurShop></OurShop>
        }
      ]
    },
  ]);

  export default router;
  