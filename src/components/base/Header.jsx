import { Link, useLocation } from "react-router-dom";
import Links from "./Links";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div
        className={
          location.pathname === "/profile"
            ? "navbar bg-[#5e72e4] text-white font-bold fixed top-0 right-0 z-50"
            : "navbar bg-slate-800 text-white font-bold fixed top-0 right-0 z-50"
        }
      >
        <div className="navbar-start">
          <div className="avatar">
            <div className="w-12 lg:w-14 ms-3 rounded-full ring ring-info ">
              <img src="./logo.jpeg" />
            </div>
          </div>
          <h1 className="btn btn-ghost normal-case text-3xl">
            <Link to={"/"}>College Reserve</Link>
          </h1>
        </div>
        <div className="navbar-end  lg:flex text-md w-full">
          <div className=" dropdown bg-slate-800 relative">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact bg-slate bg-slate-800 dropdown-content mt-3 p-2 shadow rounded-box w-52 overflow-hidden absolute right-0 z-50"
            >
              <Links />
            </ul>
          </div>
          <ul className="menu hidden lg:flex menu-horizontal px-1">
            <Links />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
