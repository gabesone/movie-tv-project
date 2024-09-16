import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Hero from "../components/Hero";
import { getMovie } from "../services/apiMovie";
import SelectedItem from "../components/SelectedItem";
import VideosItem from "../components/VideosItem";
import PhotosItem from "../components/PhotosItem";
import OverviewMovie from "../components/OverviewMovie";

function MovieDetails() {
  const [selected, setSelected] = useState("overview");

  const movieData = useLoaderData();

  return (
    <div>
      <Hero media={movieData} />

      <div>
        <nav className="mb-8 flex xl:my-8">
          <ul className="flex w-full items-center gap-[1px] text-base font-medium uppercase text-gray-500 xl:justify-center xl:gap-16 xl:text-xl">
            <SelectedItem selected={selected} setSelected={setSelected}>
              overview
            </SelectedItem>
            <SelectedItem selected={selected} setSelected={setSelected}>
              videos
            </SelectedItem>
            <SelectedItem selected={selected} setSelected={setSelected}>
              photos
            </SelectedItem>
          </ul>
        </nav>

        {/* Movie or TV Shows Information */}
        <div className="mr-[2rem] xl:mr-[8rem]">
          <div className="mx-auto">
            {selected === "overview" && <OverviewMovie mediaData={movieData} />}
            {selected === "videos" && <VideosItem />}
            {selected === "photos" && <PhotosItem />}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const movieData = await getMovie(params.mediaId);
  return movieData;
}

export default MovieDetails;
