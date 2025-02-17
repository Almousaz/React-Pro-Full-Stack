import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import AddCoffee from "./Components/AddCoffee/AddCoffee.jsx";
// import UpdateCoffee from "./Components/UpdateCoffee/UpdateCoffee.jsx";
// import Header from "./Components/Header/Header.jsx";
// import OrderCoffee from "./Components/OrderCoffee/OrderCoffee.jsx";
// import Orders from "./Components/Orders/Orders.jsx";
// import Login from "./Components/Login/Login.jsx";
// import SignUp from "./Components/SignUp/SignUp.jsx";
import AuthProvider from "./pages/provider/AuthProvider.jsx";
import Header from "./components/Header.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import OrderCoffee from "./components/OrderCoffee.jsx";
import Orders from "./components/Orders.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import PrivateRoutes from "./pages/routes/PrivateRoutes.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Header></Header>
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch("https://ahmeds-coffee-express.vercel.app/totalCoffees"),
      },
      {
        path: "/addcoffee",
        element: (
          <PrivateRoutes>
            <AddCoffee></AddCoffee>
          </PrivateRoutes>
        ),
      },
      {
        path: "/updatecoffee/:id",
        element: (
          <PrivateRoutes>
            <UpdateCoffee></UpdateCoffee>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://ahmeds-coffee-express.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/ordercoffee/:id",
        element: (
          <PrivateRoutes>
            <OrderCoffee></OrderCoffee>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://ahmeds-coffee-express.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders></Orders>
          </PrivateRoutes>
        ),
        // loader: ()=> fetch('https://ahmeds-coffee-express.vercel.app/orderCoffee')
      },
      // public page
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
