import { NavLink } from "react-router-dom";

function ButtonNav({ children, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 transition-colors duration-300"
            : "transition-colors duration-300 hover:text-gray-400"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default ButtonNav;
