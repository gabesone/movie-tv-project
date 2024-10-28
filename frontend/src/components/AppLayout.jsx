import { Outlet } from "react-router-dom";

import MainNav from "./MainNav";
import Footer from "./Footer";
import { useState } from "react";
import Search from "../pages/Search";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid h-[100dvh] grid-rows-[auto_3.5rem] xl:grid-cols-[6rem_auto] xl:grid-rows-[none]">
      <MainNav setIsOpen={setIsOpen} />

      <main className="overflow-y-auto">
        <div className="flex flex-col">
          <div className="h-[100dvh] flex-1">
            <Search isOpen={isOpen} />
            <Outlet />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
