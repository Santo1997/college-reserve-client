import { NavLink } from "react-router-dom";

const Activelink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "btn-ghost btn-md btn-info text-info hover:text-red-500"
          : "btn-md hover:text-info"
      }
    >
      {children}
    </NavLink>
  );
};

export default Activelink;
