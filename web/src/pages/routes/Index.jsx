import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Dashboard } from "../dashboard/Index";
import { Home } from "../home/Index";
import { Login } from "../login/Index";
import { Profile } from "../profile/Index";
import { Signup } from "../signup/Index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export const Router = () => (
  <RouterProvider router={router} />
)
