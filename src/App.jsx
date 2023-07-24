import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import { Toaster } from "react-hot-toast";
import Title from "./components/utilities/Title";

function App() {
  const location = useLocation();

  const webTitle = () => {
    if (location.pathname === "/") {
      return <Title title="Home" />;
    } else if (location.pathname === "/colleges") {
      return <Title title="Colleges" />;
    } else if (location.pathname === "/admission") {
      return <Title title="Admission" />;
    } else if (location.pathname === "/my_college") {
      return <Title title="My College" />;
    } else if (location.pathname === "/profile") {
      return <Title title="Profile" />;
    } else if (location.pathname === "/edit_profile") {
      return <Title title="Edit Profile" />;
    } else if (location.pathname === "/reset") {
      return <Title title="Reset Password" />;
    } else if (location.pathname === "/signin") {
      return <Title title="Login" />;
    } else if (location.pathname === "/signup") {
      return <Title title="Signup" />;
    }
  };

  return (
    <>
      {webTitle()}
      <Header />
      <div
        className={
          location.pathname === "/profile"
            ? "m-0 px-0 md:px-0"
            : "mt-24 px-1 md:px-5"
        }
      >
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
