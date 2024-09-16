import { useState } from "react";
import ButtonNav from "../components/ButtonNav";
import Hero from "../components/Hero";
import Poster from "../components/Poster";
import { getMovie } from "../services/apiMovie";
import { useLoaderData, useParams } from "react-router-dom";
import { getTVShow } from "../services/apiTVShow";
import SelectedItem from "../components/SelectedItem";
import OverviewItem from "../components/OverviewItem";
import VideosItem from "../components/VideosItem";
import PhotosItem from "../components/PhotosItem";

function MovieOrTvDetails() {
  const [selected, setSelected] = useState("overview");

  const mediaData = useLoaderData();

  console.log(mediaData);

  return (
    <div>
      <Hero media={mediaData} />

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
            {selected === "overview" && <OverviewItem mediaData={mediaData} />}
            {selected === "videos" && <VideosItem />}
            {selected === "photos" && <PhotosItem />}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  // Check if pathnameType is /movie or /tv
  // and return the data according to the path
  if (params.pathnameType === "movie") {
    const movieData = await getMovie(params.mediaId);
    return movieData;
  }

  const tvData = await getTVShow(params.mediaId);
  return tvData;
}

export default MovieOrTvDetails;
