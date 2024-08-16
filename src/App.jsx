import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./pages/cart";
import Landing from "./pages/landingPage";
import PlaceOrder from "./pages/placeOrder";
import RootLayout from "./layout/rootLayout";
import VendorPage from "./pages/Vendors";
import Add from "./pages/Vendors/add";
import List from "./pages/Vendors/list";
import Orders from "./pages/Vendors/orders";
import UserPage from "./pages/users";
import OrderMenu from "./pages/users/orderMenu";
import UserOrders from "./pages/users/userOrders";
import Payment from "./pages/payment";
import Store from "./pages/store";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "place/order",
          element: <PlaceOrder />,
        },
        {
          path: "/payment",
          element:<Payment /> ,
        },
        {
          path: "store",
          element:<Store /> ,
        }
       
        
      ],
    },
    {
      path: "vendor/page",
      element: <VendorPage />,
      children: [
        {
          index: true,
          element:<Orders />,
        },
        {
          path: "add",
          element: <Add />,
        },
        {
          path: "list",
          element: <List />,
        },
        
      ],
    },
    {
      path: "user",
      element: <UserPage />,
      children: [
        {
          index: true,
          element:<OrderMenu/>
        },
        {
          path: "menu",
          element: <OrderMenu/>
        },
        {
          path: "user/orders",
          element:<UserOrders/>
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
