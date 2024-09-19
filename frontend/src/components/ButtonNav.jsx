import { NavLink } from "react-router-dom";

function ButtonNav({ children, path, label }) {
  return (
    <li className="text-2xl">
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 transition-colors duration-300"
            : "transition-colors duration-300 hover:text-gray-400"
        }
        aria-label={label}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default ButtonNav;
