import Hero from "../components/Hero";
import Poster from "../components/Poster";
import randomHero from "../helpers/randomHero";
import Loading from "../components/Loading";
import { useTrendingData } from "../hooks/useTrendingData";
import CarouselMovie from "../components/CarouselMovie";
import CarouselTv from "../components/CarouselTv";

function Home() {
  const { trendingMovieQuery, trendingTvShowQuery } = useTrendingData();

  if (trendingMovieQuery.isPending || trendingTvShowQuery.isPending)
    return <Loading />;

  // Receive a random media (movie or tv show) to display on Hero component
  const randomHeroData = randomHero(
    trendingMovieQuery.data,
    trendingTvShowQuery.data,
  );

  return (
    <div>
      <Hero media={randomHeroData} mediaType={randomHeroData.media_type} />
      <h2 className="text-3xl">Home</h2>
      <div></div>
      <div>
        <CarouselMovie mediaData={trendingMovieQuery.data} />
        <CarouselTv mediaData={trendingTvShowQuery.data} />

        <p>a</p>
      </div>
    </div>
  );
}

export default Home;
