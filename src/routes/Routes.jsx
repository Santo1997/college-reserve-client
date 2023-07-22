import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/home/Home";

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
      //   {
      //     path: "/login",
      //     element: <Login></Login>,
      //   },
      //   {
      //     path: "/signup",
      //     element: <Signup></Signup>,
      //   },
    ],
  },
]);

export default router;
