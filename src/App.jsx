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
        {
          path: "orders",
          element:<Orders /> ,
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
