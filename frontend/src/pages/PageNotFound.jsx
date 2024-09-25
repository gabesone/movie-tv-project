import { useNavigate } from "react-router-dom";

import MainNav from "../components/MainNav";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="grid h-[100dvh] grid-rows-[auto_3.5rem] xl:grid-cols-[6rem_auto] xl:grid-rows-[none]">
      <MainNav />

      <div className="flex flex-col items-center justify-center space-y-4 overflow-y-auto px-4 text-center text-gray-100">
        <h2 className="text-base font-medium sm:text-2xl">
          The page you are looking for could not be found!
        </h2>
        <p className="text-sm text-gray-400 sm:text-base">
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>

        <button onClick={() => navigate(-1)} className="text-gray-400">
          <span className="font-medium text-gray-100 underline">Go back</span>{" "}
          to the previous page.
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
