import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import Hero from "../components/Hero";
import { getMovie, getMoviesRecommendations } from "../services/apiMovie";
import SelectedItem from "../components/SelectedItem";
import VideosItem from "../components/VideosItem";
import PhotosItem from "../components/PhotosItem";
import OverviewMovie from "../components/OverviewMovie";
import TopNav from "../components/TopNav";
import CarouselMovie from "../components/CarouselMovie";

function MovieDetails() {
  const [selected, setSelected] = useState("overview");
  const { movieData, movieRecommendation } = useLoaderData();

  console.log(movieData);

  return (
    <>
      <TopNav>
        {movieData.title} ({movieData.release_date.slice(0, 4)})
      </TopNav>

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

          {/* Movie Information */}
          <div>
            <div>
              {selected === "overview" && (
                <OverviewMovie mediaData={movieData} />
              )}
              {selected === "videos" && <VideosItem />}
              <div>
                {selected === "photos" && (
                  <PhotosItem images={movieData.images} />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* More movies like this */}
        <div className="mt-8 sm:mt-16">
          <h2 className="mb-2 px-4 text-xl font-medium text-gray-100 sm:mb-4 sm:text-2xl md:px-8 lg:px-14">
            More Like This
          </h2>
          <CarouselMovie mediaData={movieRecommendation} />
        </div>
      </div>
    </>
  );
}

export async function loader({ params }) {
  const movieData = await getMovie(params.mediaId);
  const movieRecommendation = await getMoviesRecommendations(params.mediaId);
  return { movieData, movieRecommendation };
}

export default MovieDetails;
