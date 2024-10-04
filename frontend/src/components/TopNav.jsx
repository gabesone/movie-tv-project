import { SlArrowLeft } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function TopNav({ children }) {
  const navigate = useNavigate();

  return (
    <nav className="sticky bottom-0 left-0 right-0 top-0 z-20 flex h-11 items-center justify-center bg-black text-gray-100 xl:hidden">
      <button
        className="absolute bottom-0 left-0 right-0 top-0 flex h-full w-11 items-center justify-center text-xl focus:bg-purple-600"
        onClick={() => navigate(-1)}
        aria-label="Go Back"
      >
        <SlArrowLeft />
      </button>
      <p className="truncate px-16 text-sm font-medium">{children}</p>
    </nav>
  );
}

export default TopNav;
