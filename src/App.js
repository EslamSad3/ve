import Login from "./Auth/Login";
import { ToastContainer } from "react-toastify";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import AddProduct from "./Actions/AddProduct";
import AddBrand from "./Actions/AddBrand";
import AddCat from "./Actions/AddCat";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "/addproduct",
      element: <AddProduct />,
    },

    {
      path: "/addbrand",
      element: <AddBrand />,
    },

    {
      path: "/addcat",
      element: <AddCat />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}>
        <Login />
        <Home />
        <AddProduct />
      </RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
