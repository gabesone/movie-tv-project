import { useLoaderData } from "react-router-dom";
import { useState } from "react";

import { getTVShow } from "../services/apiTVShow";
import Hero from "../components/Hero";
import SelectedItem from "../components/SelectedItem";
import OverviewTvShow from "../components/OverviewTvShow";
import VideosItem from "../components/VideosItem";
import PhotosItem from "../components/PhotosItem";

function TvShowDetails() {
  const [selected, setSelected] = useState("overview");

  const tvShowData = useLoaderData();

  console.log(tvShowData);

  return (
    <div>
      <Hero media={tvShowData} />

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
            {selected === "overview" && (
              <OverviewTvShow mediaData={tvShowData} />
            )}
            {selected === "videos" && <VideosItem />}
            {selected === "photos" && <PhotosItem />}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const tvShowData = await getTVShow(params.mediaId);
  return tvShowData;
}

export default TvShowDetails;
