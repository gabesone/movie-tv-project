import { Link } from "react-router-dom";

function TextLink({ children, pathname }) {
  return (
    <div className="mb-2 flex items-baseline gap-2 px-4 font-medium capitalize text-gray-100 sm:mb-4 md:px-8 lg:px-14">
      <h2 className="text-xl sm:text-2xl">{children}</h2>
      <Link
        to={pathname}
        className="text-sm text-purple-500 transition-colors duration-300 hover:text-purple-700"
      >
        Explore All
      </Link>
    </div>
  );
}

export default TextLink;
