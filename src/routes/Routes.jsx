import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Signup from "../components/pages/signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    // loader: () => fetch(`https://assign12-camp-server.vercel.app/courses`),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/colleges",
      //   element: <Colleges />,
      // },
      // {
      //   path: "/admission",
      //   element: <Admission />,
      // },
      // {
      //   path: "/my_college",
      //   element: <MyClg />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
