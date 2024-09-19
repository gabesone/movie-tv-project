import Hero from "../components/Hero";
import randomHero from "../helpers/randomHero";
import Loading from "../components/Loading";
import { useTrendingData } from "../hooks/useTrendingData";
import CarouselMovie from "../components/CarouselMovie";
import CarouselTv from "../components/CarouselTv";
import TextLink from "../components/TextLink";

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

      <div className="mt-8 space-y-4 sm:mt-16 sm:space-y-8">
        {/* Trending movies */}
        <div>
          <TextLink pathname="/movie/category/trending">
            Trending movies
          </TextLink>
          <CarouselMovie mediaData={trendingMovieQuery.data} />
        </div>

        {/* Trending tv shows */}
        <div>
          <TextLink pathname="/tv/category/trending">
            Trending tv shows
          </TextLink>
          <CarouselTv mediaData={trendingTvShowQuery.data} />
        </div>
      </div>
    </div>
  );
}

export default Home;
