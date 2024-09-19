import { Outlet } from "react-router-dom";

import MainNav from "./MainNav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-[100dvh] grid-rows-[auto_3.5rem] xl:grid-cols-[6rem_auto] xl:grid-rows-[none]">
      <MainNav />

      <main className="overflow-y-scroll">
        <div className="flex flex-col">
          <div className="flex-1">
            <Outlet />
          </div>

          <Footer />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
