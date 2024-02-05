import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminRegister from "./admin/Register/Register";
import AdminLogin from "./admin/Login/Login";
import Product from "./admin/Product/Product";
import Cart from "./admin/Cart/Cart";
import Orders from "./admin/Orders/Orders";
import Payment from "./admin/Payment/Payment";
import Home from "./admin/Home/Home";
import User from "./user/User";
import Protected from "./admin/Protected/Protected";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>home</>,
    },
    {
      path: "/admin",
      element: <Protected/>,
      children: [
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "home",
          element:<Home/> 
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "users",
          element:<User/>
        },
      ],
    },

    {
      path: "admin-register",
      element: <AdminRegister />,
    },
    {
      path: "admin-login",
      element: <AdminLogin />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
