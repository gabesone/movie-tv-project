import Hero from "../components/Hero";
import Poster from "../components/Poster";
import randomHero from "../helpers/randomHero";
import Loading from "../components/Loading";
import { useTrendingData } from "../hooks/useTrendingData";

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
      <div className="flex">
        <Poster />

        <p>a</p>
      </div>
    </div>
  );
}

export default Home;
