import Hero from "../components/Hero";
import Poster from "../components/Poster";
import randomHero from "../helpers/randomHero";
import Loading from "../components/Loading";
import { useTrendingData } from "../hooks/useTrendingData";
import { randomTrendingData } from "../helpers/randomTrendingData";
import { useEffect } from "react";

function Home() {
  const { trendingMoviesQuery, TrendingTVShowQuery } = useTrendingData();

  if (trendingMoviesQuery.isPending || TrendingTVShowQuery.isPending)
    return (
      <Loading
        isComplete={
          trendingMoviesQuery.isSuccess && TrendingTVShowQuery.isSuccess
        }
      />
    );

  // Receive a random media (movie or tv show) to display on Hero at Home page
  const randomMedia = randomHero(
    trendingMoviesQuery.data,
    TrendingTVShowQuery.data,
  );

  // const {
  //   id,
  //   backdrop_path,
  //   media_type,
  //   overview,
  //   release_date,
  //   title,
  //   vote_average,
  // } = randomMedia;

  return (
    <div>
      <Hero media={randomMedia} mediaType={randomMedia.media_type} />
      <h2 className="text-3xl">Home</h2>
      <div></div>
      <div className="flex">
        <Poster />

        <p>a</p>
      </div>
    </div>
  );
}

export default Home;
