import { Outlet, useLoaderData, useLocation } from "react-router-dom";

import { getTrendingMovies } from "../services/apiMovie";
import { getTrendingTVShows } from "../services/apiTVShow";
import MainNav from "./MainNav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-[100dvh] grid-cols-[6rem_auto]">
      <MainNav />

      <main className="overflow-y-scroll">
        <Outlet />

        <Footer />
      </main>
    </div>
  );
}

export default AppLayout;
