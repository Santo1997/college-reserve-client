import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Signup from "../components/pages/signup/Signup";
import Colleges from "../components/pages/colleges/Colleges";
import Admission from "../components/pages/admission/Admission";
import MyClg from "../components/pages/myClg/MyClg";
import Reset from "../components/pages/reset/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    loader: () => fetch(`http://localhost:5000/allClg`),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <Colleges />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/my_college",
        element: <MyClg />,
      },
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/reset",
        element: <Reset />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
