import { SlFilm, SlHome, SlScreenDesktop, SlMagnifier } from "react-icons/sl";

import ButtonNav from "./ButtonNav";

function MainNav() {
  return (
    <nav className="row-span-1 row-start-2 flex items-center border-gray-800 bg-black text-white xl:row-start-1 xl:items-start xl:border-r-[0.1px]">
      <ul className="flex w-full justify-around xl:mt-8 xl:flex-col xl:items-center xl:justify-start xl:gap-16">
        {/* Home */}
        <ButtonNav path="/">
          <SlHome />
        </ButtonNav>

        {/* Movies */}
        <ButtonNav path="/movie">
          <SlFilm />
        </ButtonNav>

        {/* TV Shows */}
        <ButtonNav path="/tv">
          <SlScreenDesktop />
        </ButtonNav>

        {/* Search */}
        <li className="text-2xl">
          <SlMagnifier />
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
