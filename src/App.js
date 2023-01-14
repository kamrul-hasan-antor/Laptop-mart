import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./main/Main";
import AddProduct from "./pages/Seller/AddProduct/AddProduct";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import MyOrders from "./pages/Buyer/MyOrders/MyOrders";
import Register from "./pages/Register/Register";
import MyProduct from "./pages/Seller/MyProduct/MyProduct";
import AllSerller from "./pages/Admin/AllSerller";
import AllBuyers from "./pages/Admin/AllBuyers";
import AllCategory from "./pages/AllCategory/AllCategory";

import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
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
          path: "/blogs",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/myOrders",
          element: <MyOrders></MyOrders>,
        },
        {
          path: "/addProduct",
          element: <AddProduct></AddProduct>,
        },
        {
          path: "/myProducts",
          element: <MyProduct></MyProduct>,
        },
        {
          path: "/allSelers",
          element: <AllSerller></AllSerller>,
        },
        {
          path: "/allBuyers",
          element: <AllBuyers></AllBuyers>,
        },
        {
          path: "/allCategory/:category",
          element: (
            <PrivateRoute>
              <AllCategory></AllCategory>,
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(`http://localhost:5000/allCategories/${params.category}`),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
