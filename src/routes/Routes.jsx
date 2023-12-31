import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";
import Login from "../components/pages/login/Login";
import Signup from "../components/pages/signup/Signup";
import Colleges from "../components/pages/colleges/Colleges";
import Admission from "../components/pages/admission/Admission";
import MyClg from "../components/pages/myClg/MyClg";
import Reset from "../components/pages/reset/Reset";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/pages/profile/Profile";
import EditProfile from "../components/pages/profile/EditProfile";
import Error from "../components/pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,

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
        element: (
          <PrivateRoutes>
            <MyClg />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/edit_profile",
        element: (
          <PrivateRoutes>
            <EditProfile />
          </PrivateRoutes>
        ),
        loader: () => fetch(`https://endgame-server-iota.vercel.app/getAllClg`),
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
